import httpStatus from "http-status";

export const errorHandling = (error, req, res, next) => {
  const { message, code, status } = error;

  if (code === '23503') return res.status(httpStatus.NOT_FOUND).send({ message });
  if (code === '23505' || code === '23514') return res.status(httpStatus.CONFLICT).send({ message });
  if (status === 422) return res.status(httpStatus.UNPROCESSABLE_ENTITY).send({ message });

  res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ message });
};