const express = require('express');
const passport = require('passport');

const UserMovieService = require('../services/userMovie');

const validationHandler = require('../utils/middleware/validationHandler');
const scopesValidationHandler = require('../utils/middleware/scopesValidationHandler');
// const { movieIdSchema } = require('../utils/schemas/movies');
const { userIdSchema } = require('../utils/schemas/users');
const {
  userMovieIdSchema,
  userMovieCreateSchema
} = require('../utils/schemas/userMovie');

// JWT strategy
require('../utils/auth/strategies/jwt');

function userMovieApi(app) {
  const router = express.Router();
  const userMoviesSerivice = new UserMovieService();

  app.use('/api/user-movies', router);

  router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['read:user-movies']),
    validationHandler({ userId: userIdSchema }, 'query'),
    async (req, res, next) => {
      const { userId } = req.query;

      try {
        const userMovies = await userMoviesSerivice.getUserMovies(userId);
        res.status(200).json({
          data: userMovies,
          message: 'User movies listed.'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['create:user-movies']),
    validationHandler(userMovieCreateSchema),
    async (req, res, next) => {
      const { body: userMovie } = req;
      try {
        const createdUserMovieId = await userMoviesSerivice.createUserMovies(
          userMovie
        );

        res.status(201).json({
          data: createdUserMovieId,
          message: 'Movie added to user'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.delete(
    '/:userMovieId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['delete:user-movies']),
    validationHandler({ userMovieId: userMovieIdSchema }, 'params'),
    async (req, res, next) => {
      const { userMovieId } = req.params;
      try {
        const deletedUserMovieId = await userMoviesSerivice.deleteUserMovie(
          { userMovieId }
        );

        res.status(200).json({
          data: deletedUserMovieId,
          message: 'Move removed from user.'
        });
      } catch (error) {
        next(error);
      }
    }
  );
}

module.exports = userMovieApi;
