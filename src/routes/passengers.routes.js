import { Router } from "express";
import { getPassengers, postPassenger } from "../controllers/passengers.controller.js";
import { schemaValidation } from "../middlewares/schemaValidation.middleware.js";
import { passengerSchema } from "../schemas/passenger.schemas.js";

const passangersRouter = Router();

passangersRouter.post('/passengers', schemaValidation(passengerSchema), postPassenger);
passangersRouter.get('/passengers/travels', getPassengers);

export default passangersRouter;