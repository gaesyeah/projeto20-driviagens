import { Router } from "express";
import flightsController from "../controllers/flights.controller.js";
import { schemaValidation } from "../middlewares/schemaValidation.middleware.js";
import { flightSchema } from "../schemas/flight.schemas.js";

const flightsRouter = Router();

flightsRouter.post('/flights', schemaValidation(flightSchema), flightsController.create);
flightsRouter.get('/flights', flightsController.read);

export default flightsRouter;