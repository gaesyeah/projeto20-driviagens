import citiesRepository from "../repository/cities.repository.js";

const create = (body) => {
  return citiesRepository.create(body);
};

const citiesService = { create };
export default citiesService;