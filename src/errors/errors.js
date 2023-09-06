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

const error = { unprocessableEntity, internalServerError };
export default error;