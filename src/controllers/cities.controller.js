import httpStatus from "http-status";
import citiesService from "../services/cities.service.js";

const create = async (req, res) => {
  try {
    await citiesService.create(req.body);
    res.sendStatus(httpStatus.CREATED);
  } catch ({ message, code }) {
    if (code === '23505') return res.status(httpStatus.CONFLICT).send({ message });
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ message });
  }
};

const citiesController = { create };
export default citiesController;