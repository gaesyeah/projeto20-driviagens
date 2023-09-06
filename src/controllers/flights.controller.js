import httpStatus from "http-status";
import flightsService from "../services/flights.service.js";

export const create = async (req, res) => {
  await flightsService.create(req.body);
  res.sendStatus(httpStatus.CREATED);
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