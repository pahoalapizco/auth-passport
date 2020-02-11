const express = require('express');
const UserMovieService = require('../services/userMovie');

const validationHandler = require('../utils/middleware/validationHandler');
// const { movieIdSchema } = require('../utils/schemas/movies');
const { userIdSchema } = require('../utils/schemas/users');
const {
  userMovieIdSchema,
  userMovieCreateSchema
} = require('../utils/schemas/userMovie');

function userMovieApi(app) {
  const router = express.Router();
  const userMoviesSerivice = new UserMovieService();

  app.use('/api/user-movies', router);

  router.get(
    '/',
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
    validationHandler(userMovieIdSchema),
    async (req, res, next) => {
      const { userMovieId } = req.params;
      try {
        const deletedUserMovieId = await userMoviesSerivice.deleteUserMovie(
          userMovieId
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
