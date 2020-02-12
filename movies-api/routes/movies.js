const express = require('express');
const passport = require('passport');
const MoviesServices = require('../services/movies');
const validationHandler = require('../utils/middleware/validationHandler');
const {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema
} = require('../utils/schemas/movies');
const cacheResponse = require('../utils/cacheResponse');
const {
  FIVE_MINUTES_IN_SECONDS,
  SIXTY_MINUTES_IN_SECONDS
} = require('../utils/time');

// JWT strategy
require('../utils/auth/strategies/jwt');

function moviesApi(app) {
  const router = express.Router();
  const moviesServices = new MoviesServices();

  app.use('/api/movies', router);

  router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    async function(req, res, next) {
      cacheResponse(res, FIVE_MINUTES_IN_SECONDS);

      const { tags } = req.query;
      try {
        const movies = await moviesServices.getMovies({ tags });

        res.status(200).json({
          data: movies,
          message: 'Movies listed'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.get(
    '/:movieId',
    passport.authenticate('jwt', { session: false }),
    validationHandler({ movieId: movieIdSchema }, 'params'),
    async function(req, res, next) {
      cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);

      const { movieId } = req.params;
      try {
        const movie = await moviesServices.getMovie({ movieId });

        res.status(200).json({
          data: movie,
          message: 'Movie retrieved'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    validationHandler(createMovieSchema),
    async function(req, res, next) {
      const { body: movie } = req;
      try {
        const createdMovieId = await moviesServices.createMovie({ movie });

        res.status(201).json({
          data: createdMovieId,
          message: 'Movie created'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.put(
    '/:movieId',
    passport.authenticate('jwt', { session: false }),
    validationHandler({ movieId: movieIdSchema }, 'params'),
    validationHandler(updateMovieSchema),
    async function(req, res, next) {
      const { movieId } = req.params;
      const { body: movie } = req;
      try {
        const updatedMovieId = await moviesServices.updateMovie({
          movieId,
          movie
        });

        res.status(200).json({
          data: updatedMovieId,
          message: 'Movie updated'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.delete(
    '/:movieId',
    passport.authenticate('jwt', { session: false }),
    validationHandler({ movieId: movieIdSchema }, 'params'),
    async function(req, res, next) {
      const { movieId } = req.params;
      try {
        const deletedMovieId = await moviesServices.deleteMovie({ movieId });

        res.status(200).json({
          data: deletedMovieId,
          message: 'Movie deleted'
        });
      } catch (error) {
        next(error);
      }
    }
  );
}

module.exports = moviesApi;
