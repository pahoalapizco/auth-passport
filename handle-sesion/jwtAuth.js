const jwt = require('jsonwebtoken');

const singToken = (payload, secret) => {
  return jwt.sign(payload, secret);
}

const verifyToken = (token, secret) => {
  return jwt.verify(token, secret);
}

module.exports = {
  singToken,
  verifyToken
};
