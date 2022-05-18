import { Router } from "express";

import * as creatorController from '../controllers/creatorController.js'

const creatorRouter = Router();
creatorRouter.post('/GOD_MODE/create/item', creatorController.createItem)
creatorRouter.put('/item/:id/edit', creatorController.editItem)
export default creatorRouter;