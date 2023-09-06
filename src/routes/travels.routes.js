import { Router } from "express";
import travelsController from "../controllers/travels.controller.js";
import { schemaValidation } from "../middlewares/schemaValidation.middleware.js";
import { travelSchema } from "../schemas/travel.schemas.js";

const travelsRouter = Router();

travelsRouter.post('/travels', schemaValidation(travelSchema), travelsController.create);
travelsRouter.get('/passengers/travels', travelsController.read);

export default travelsRouter;