export const create = async (req, res) => {
  try {
    res.send();
  } catch ({ message }) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ message });
  }
};

const travelsController = { create };
export default travelsController;