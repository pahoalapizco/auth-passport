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
    .required(),
  email: joi
    .string()
    .email()
    .required(),
  password: joi
    .string()
    .min(8)
    .required(),
  isAdmin: joi.boolean()
};

module.exports = {
  userIdSchema,
  userCreateSchema
};
