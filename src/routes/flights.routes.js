import { Router } from "express";
import { getFlights, postFlight } from "../controllers/flights.controller.js";
import { schemaValidation } from "../middlewares/schemaValidation.middleware.js";
import { flightSchema } from "../schemas/flight.schemas.js";

const flightsRouter = Router();

flightsRouter.post('/flights', schemaValidation(flightSchema), postFlight);
flightsRouter.get('/flights', getFlights)

export default flightsRouter;