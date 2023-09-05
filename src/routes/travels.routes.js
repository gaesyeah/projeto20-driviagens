import { Router } from "express";
import { postTravel } from "../controllers/travels.controller.js";
import { schemaValidation } from "../middlewares/schemaValidation.middleware.js";
import { travelSchema } from "../schemas/travel.schemas.js";

const travelsRouter = Router();

travelsRouter.post('/travels', schemaValidation(travelSchema), postTravel);

export default travelsRouter;