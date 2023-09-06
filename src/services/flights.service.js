import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
import error from "../errors/errors.js";
import flightsRepository from "../repository/flights.repository.js";

const create = (body) => {
  const { date } = body;

  dayjs.extend(customParseFormat);
  if (dayjs().isAfter(dayjs(date, "DD-MM-YYYY"))) throw error.unprocessableEntity("The flight date must be after today's date");

  return flightsRepository.create(body);
};

const flightsService = { create };
export default flightsService;