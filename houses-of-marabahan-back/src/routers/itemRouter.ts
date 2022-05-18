import { Router } from "express";

import * as itemController from '../controllers/itemController.js'

const itemRouter = Router();
itemRouter.post('/add-to-storage', itemController.addToStorage)
itemRouter.get('/item/:name', itemController.findByName)
itemRouter.get('/item/id/:id', itemController.findById)

export default itemRouter;