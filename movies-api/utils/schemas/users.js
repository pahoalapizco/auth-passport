const joi = require('@hapi/joi');

/**
 * /^ = Inica expresión regurar.
 * [] = incluye los caracteres.
 * {24} = indica la longitud de la cadena
 * $/ = Termina expresión regurar-
 */
const userIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

const userCreateSchema = {
  name: joi
    .string()
    .max(100)
    .required()
    .error(
      new Error('userCreateSchema:name has an error')
    ),
  email: joi
    .string()
    .email()
    .required()
    .error(
      new Error('userCreateSchema:email has an error')
    ),
  password: joi
    .string()
    .min(8)
    .required()
    .error(
      new Error('userCreateSchema:password has an error')
    ),
  isAdmin: joi.boolean()
  .error(
    new Error('userCreateSchema:isAdmin has an error')
  )
};

module.exports = {
  userIdSchema,
  userCreateSchema
};
