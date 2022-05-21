import { Router } from "express";

import * as creatorController from '../controllers/creatorController.js'

const creatorRouter = Router();
creatorRouter.post('/item/create', creatorController.createItem)
creatorRouter.put('/item/id/:id/edit', creatorController.editItem)
creatorRouter.get('/items', creatorController.getAllItems)
export default creatorRouter;