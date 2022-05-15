import { Router } from "express";

import * as creatorController from '../controllers/creatorController.js'

const creatorRouter = Router();
creatorRouter.post('/GOD_MODE/create/item', creatorController.createItem)
export default creatorRouter;