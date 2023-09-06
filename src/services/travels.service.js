import travelsRepository from "../repository/travels.repository.js";

const create = (body) => {
  return travelsRepository.create(body);
};

const travelsService = { create };
export default travelsService;