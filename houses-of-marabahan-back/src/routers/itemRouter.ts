import { Router } from "express";

import * as itemController from '../controllers/itemController.js'

const itemRouter = Router();
itemRouter.post('/add-to-storage', itemController.addToStorage)
itemRouter.get('/item/:name', itemController.findByName)
itemRouter.get('/item/:id', itemController.findById)

itemRouter.post('/move-to-inventory', itemController.moveToInventory)

export default itemRouter;