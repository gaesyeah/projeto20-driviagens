import httpStatus from "http-status";
import travelsService from "../services/travels.service.js";

export const create = async (req, res) => {
  await travelsService.create(req.body);
  res.sendStatus(httpStatus.CREATED);
};

const travelsController = { create };
export default travelsController;