const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const UserService = require('../../../services/user');

// Definición de una estrategia de autenticación:
passport.use(new BasicStrategy(async (email, pass, cb) => {
  const userService = new UserService();

  try {
    const user = await userService.getUser({ email });

    if (!user) {
      return cb(boom.unauthorized(), false);
    }

    if (!(await bcrypt.compare(pass, user.password))) {
      return cb(boom.unauthorized(), false);
    }

    delete user.password;

    return cb(null, user);
    
  } catch (error) {
    cb(error);
  }
}));

