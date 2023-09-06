import httpStatus from "http-status";
import flightsService from "../services/flights.service.js";

export const create = async (req, res) => {
  try {
    await flightsService.create(req.body);
    res.sendStatus(httpStatus.CREATED);
  } catch ({ message, code, type }) {
    if (code === '23503') return res.status(httpStatus.NOT_FOUND).send({ message });
    if (code === '23514') return res.status(httpStatus.CONFLICT).send({ message });
    if (type === 'unprocessableEntity') return res.status(httpStatus.UNPROCESSABLE_ENTITY).send({ message });
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