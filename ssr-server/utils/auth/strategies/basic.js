const passport = require("passport");
const { BasicStrategy } = require("passport-http");
const boom = require("@hapi/boom");
const axios = require("axios");

const { config } = require("../../../config");

// Definición de una estrategia de autenticación:
passport.unuse(
  new BasicStrategy(async function(email, password, cb) {
    try {
      const { data, status } = await axios({
        url: `${config.apiUrl}/api/auth/sing-in`,
        method: "POST",
        auth: {
          username: email,
          password
        },
        data: {
          apiKeyToken: config.apiKeyToken
        }
      });

      if (!data || status !== 200) {
        return cb(boom.unauthorized(), false);
      }

      return cb(null, data);
    } catch (error) {
      cb(error);
    }
  })
);
