import { Router } from "express";

import * as kindController from '../controllers/kindController.js';

const kindRouter = Router();
kindRouter.get('/kinds', kindController.getKinds)

export default kindRouter;