import httpStatus from "http-status";
import citiesService from "../services/cities.service.js";

export const postCity = async (req, res) => {
  try {
    await citiesService.addCity(req.body);
    res.send();
  } catch ({ message, code }) {
    if (code === '23505') return res.status(httpStatus.CONFLICT).send({ message });
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ message });
  }
};