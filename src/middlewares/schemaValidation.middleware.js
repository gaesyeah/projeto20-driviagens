import error from "../errors/errors.js";

export const schemaValidation = (schema) => {
  return (req, res, next) => {

    const result = schema.validate(req.body, { abortEarly: false });
    if (result.error) throw error.unprocessableEntity(result.error.details.map(({ message }) => message));

    next();
  }
};