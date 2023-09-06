import error from "../errors/errors.js";
import travelsRepository from "../repository/travels.repository.js";

const create = (body) => {
  return travelsRepository.create(body);
};

const read = async (query) => {
  const travels = await travelsRepository.read(query);
  if (travels.rowCount > 10) throw error.internalServerError('Too many results');

  return travels;
};

const travelsService = { create, read };
export default travelsService;