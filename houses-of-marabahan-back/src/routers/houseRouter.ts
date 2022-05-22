import { Router } from "express";

import * as houseController from '../controllers/houseController.js'

const houseRouter = Router();
houseRouter.get('/house/:name', houseController.checkNameAvailability)
houseRouter.post('/sign-up', houseController.createHouse);
houseRouter.post('/sign-in', houseController.signIn)

houseRouter.get('/house/:id/storage', houseController.getStorage)
export default houseRouter;