import citiesRepository from "../repository/cities.repository.js";

const addCity = (body) => {
  return citiesRepository.insertCity(body);
};

const citiesService = { addCity };
export default citiesService;