import { Router } from "express";

import * as creatorController from '../controllers/creatorController.js'

const creatorRouter = Router();
creatorRouter.post('/item/create', creatorController.createItem)
creatorRouter.put('/item/:id/edit', creatorController.editItem)
export default creatorRouter;