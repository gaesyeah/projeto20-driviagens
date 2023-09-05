import { Router } from "express";
import { postCity } from "../controllers/cities.controller.js";
import { schemaValidation } from "../middlewares/schemaValidation.middleware.js";
import { citySchema } from "../schemas/city.schemas.js";

const citiesRouter = Router();

citiesRouter.post('/cities', schemaValidation(citySchema), postCity);

export default citiesRouter;