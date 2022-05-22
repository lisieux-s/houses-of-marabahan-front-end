import { Router } from "express";

import * as categoryController from '../controllers/categoryController.js'
import * as itemController from '../controllers/itemController.js'

const creatorRouter = Router();
creatorRouter.get('/categories', categoryController.getAll)
creatorRouter.post('/categories/create', categoryController.create)

creatorRouter.post('/items/create', itemController.create)
creatorRouter.put('/item/:id/edit', itemController.edit)
creatorRouter.get('/items', itemController.getAll)
export default creatorRouter;