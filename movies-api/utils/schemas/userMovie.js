const joi = require('@hapi/joi');
const { movieIdSchema } = require('./movies');
const { userIdSchema } = require('./users');
/**
 * /^ = Inica expresión regurar.
 * [] = incluye los caracteres.
 * {24} = indica la longitud de la cadena
 * $/ = Termina expresión regurar-
 */
const userMovieIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

const userMovieCreateSchema = {
  userId: userIdSchema,
  movieId: movieIdSchema
};

module.exports = {
  userMovieIdSchema,
  userMovieCreateSchema
};
