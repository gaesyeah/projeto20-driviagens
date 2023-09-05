import { Router } from "express";
import citiesController from "../controllers/cities.controller.js";
import { schemaValidation } from "../middlewares/schemaValidation.middleware.js";
import { citySchema } from "../schemas/city.schemas.js";

const citiesRouter = Router();

citiesRouter.post('/cities', schemaValidation(citySchema), citiesController.create);

export default citiesRouter;