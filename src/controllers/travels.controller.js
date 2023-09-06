import httpStatus from "http-status";

export const create = async (req, res) => {
  try {
    res.sendStatus(httpStatus.CREATED);
  } catch ({ message }) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ message });
  }
};

const travelsController = { create };
export default travelsController;