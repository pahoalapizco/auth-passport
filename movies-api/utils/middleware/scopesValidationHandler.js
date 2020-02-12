const boom = require('@hapi/boom');

function scopesValidationHandler(allowedScopes) {
  return function(req, res, next) { // eslint-disable-line
    if (!req.user || (req.user && !req.user.scopes)) {
      next(boom.unauthorized('Missing scopes'));
    }

    const hasAccess = allowedScopes
      .map(allowedScope => req.user.scopes.includes(allowedScope))
      .find(allowed => Boolean(allowed));

    if (hasAccess) {
      next();
    } else {
      next(boom.unauthorized('Insufficient scopes'));
    }
    next
  };
}

module.exports = scopesValidationHandler;
