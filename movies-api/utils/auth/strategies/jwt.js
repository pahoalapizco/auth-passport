const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const boom = require('@hapi/boom');

const UserService = require('../../../services/user');
const { config } = require('../../../config');

passport.use(
  new Strategy(
    {
      secretOrKey: config.authJwtSecret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    }, /// Payload ya decodificado.
    async (payload, cb) => {
      const userService = new UserService();

      try {
        const user = userService.getUser({ email: payload.email });

        if (!user) {
          return cb(boom.unauthorized(), false);
        }

        delete user.password;

        cb(null, { ...user, scopes: payload.scopes });
      } catch (error) {
        cb(error);
      }
    }
  )
);
