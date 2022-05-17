import { Router } from "express";

import * as characterController from '../controllers/characterController.js'

const characterRouter = Router();
characterRouter.post('/house/:id/create/character', characterController.createCharacter)
export default characterRouter;