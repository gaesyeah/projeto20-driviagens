import httpStatus from "http-status";
import passengersService from "../services/passengers.service.js";

export const create = async (req, res) => {
  await passengersService.create(req.body);
  res.sendStatus(httpStatus.CREATED);
};

export const read = async (req, res) => {
  try {
    res.send();
  } catch ({ message }) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ message });
  }
};

const passengersController = { create, read };
export default passengersController;