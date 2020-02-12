const express = require('express');
const passport = require('passport');
const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');

// Servicios
const ApiKeysService = require('../services/apiKeys');
const UserService = require('../services/user');

const { config } = require('../config');
const validationHandler = require('../utils/middleware/validationHandler');
const { userCreateSchema } = require('../utils/schemas/users');

// Basic strategy
require('../utils/auth/strategies/basic');

function authApi(app) {
  const router = express.Router();
  app.use('/api/auth', router);

  const apiKeysService = new ApiKeysService();
  const userService = new UserService();

  router.post('/sing-in', async (req, res, next) => {
    const { apiKeyToken } = req.body;
    
    if (!apiKeyToken) next(boom.unauthorized('API Key es requerido'));

    passport.authenticate('basic', (error, user) => {
      try {
        
        if (error || !user) next(boom.unauthorized());

        req.login(user, { session: false }, async error => {
          if (error) next(error);

          const apiKey = await apiKeysService.getApiKey({ token: apiKeyToken });
          
          if (!apiKey) next(boom.unauthorized('API Key es requerido'));

          const { _id: id, name, email } = user;

          const payload = {
            sub: id,
            name,
            email,
            scopes: apiKey.scopes
          };

          const token = jwt.sign(payload, config.authJwtSecret, { expiresIn: '5m' });
          
          res.status(200).json({
            token, 
            user: { id, name, email }
          });
        });
      } catch (error) {
        next(error);
      }
    })(req, res, next);
  });

  router.post('/sing-up', validationHandler(userCreateSchema), async (req, res, next) => {
    const { body: user } = req;

    try {
      const createdUserId = await userService.createUser(user);

      res.status(201).json({
        data: createdUserId,
        message: 'user created'
      });
    } catch (error) {
      next(error);
    }
  });
}

module.exports = authApi;
