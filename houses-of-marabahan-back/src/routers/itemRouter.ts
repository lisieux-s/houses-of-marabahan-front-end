import { Router } from "express";

import * as itemController from '../controllers/itemController.js'

const itemRouter = Router();
itemRouter.post('/add-to-storage', itemController.addToStorage)
export default itemRouter;