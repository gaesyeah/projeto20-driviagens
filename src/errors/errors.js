import httpStatus from "http-status";

const unprocessableEntity = (resource = 'Unprocessable Entity') => {
  return {
    status: httpStatus.UNPROCESSABLE_ENTITY,
    message: resource
  }
};

const internalServerError = (resource = 'Internal Server Error') => {
  return {
    status: httpStatus.INTERNAL_SERVER_ERROR,
    message: resource
  }
};

const notFound = (resource = 'Not Found') => {
  return {
    status: httpStatus.NOT_FOUND,
    message: resource
  }
};

const badRequest = (resource = 'Bad Request') => {
  return {
    status: httpStatus.BAD_REQUEST,
    message: resource
  }
};

const error = { unprocessableEntity, internalServerError, notFound, badRequest };
export default error;