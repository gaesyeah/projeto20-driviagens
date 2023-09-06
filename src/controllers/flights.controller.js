import httpStatus from "http-status";

export const create = async (req, res) => {
  try {
    res.sendStatus(httpStatus.CREATED);
  } catch ({ message }) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ message });
  }
};

export const read = async (req, res) => {
  try {
    res.send();
  } catch ({ message }) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ message });
  }
};

const flightsController = { create, read };
export default flightsController;