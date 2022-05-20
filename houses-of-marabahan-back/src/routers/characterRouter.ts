import { Router } from "express";

import * as characterController from '../controllers/characterController.js'

const characterRouter = Router();
characterRouter.post('/house/:id/create/character', characterController.createCharacter)
characterRouter.get('/house/:id/get/active-character', characterController.findActiveCharacter)
characterRouter.put('/house/:id/set/active-character', characterController.setAsActive)
export default characterRouter;