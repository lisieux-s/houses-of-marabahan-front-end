import { Router } from "express";

import * as houseController from '../controllers/houseController.js'

const houseRouter = Router();
houseRouter.post('/sign-up', houseController.createHouse)
houseRouter.post('/house/:name', houseController.checkNameAvailability)
export default houseRouter;