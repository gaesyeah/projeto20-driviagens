import JoiDate from '@joi/date';
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
import Joi from "joi";
import error from "../errors/errors.js";
import flightsRepository from "../repository/flights.repository.js";

const create = (body) => {
  const { date } = body;

  dayjs.extend(customParseFormat);
  if (dayjs().isAfter(dayjs(date, "DD-MM-YYYY"))) throw error.unprocessableEntity("The flight date must be after today's date");

  return flightsRepository.create(body);
};

const read = async (query) => {
  const { origin, destination, 'bigger-date': biggerDate, 'smaller-date': smallerDate, page } = query;

  if (page && page <= 0) throw error.badRequest('The query page cannot be equal or less than zero');

  if (biggerDate || smallerDate){
    if ((biggerDate && !smallerDate) || !biggerDate && smallerDate) throw error.unprocessableEntity('The two query dates are mandatory if at least one is specified');

    const result = Joi.object({
        biggerDate: Joi.extend(JoiDate).date().format('DD-MM-YYYY').utc(),
        smallerDate: Joi.extend(JoiDate).date().format('DD-MM-YYYY').utc()
      }).validate({ biggerDate, smallerDate });
    if (result.error) throw error.unprocessableEntity("The date format must adhere to 'DD-MM-YYYY'");
  
    dayjs.extend(customParseFormat);
    if (dayjs(smallerDate, "DD-MM-YYYY").isAfter(dayjs(biggerDate, "DD-MM-YYYY"))) throw error.badRequest('The bigger-date must be after the smaller-date');
  }

  const flights = await flightsRepository.read(origin, destination, biggerDate, smallerDate, page);
  if (destination && flights.rowCount === 0) {
    throw error.notFound(`No flights found with the destination: ${destination}${origin ? ` and origin: ${origin}` : ''}${biggerDate || smallerDate ? ` with date between ${smallerDate} and ${biggerDate}` : ''}${page ? ` (on page: ${page})` : ''}`);
  };

  return flights;
}

const flightsService = { create, read };
export default flightsService;