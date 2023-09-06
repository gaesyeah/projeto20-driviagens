import httpStatus from "http-status";


const unprocessableEntity = (resource = '') => {
  return {
    status: httpStatus.UNPROCESSABLE_ENTITY,
    message: resource
  }
};

const error = { unprocessableEntity };
export default error;