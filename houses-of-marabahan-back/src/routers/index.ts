import { Router } from "express";


import houseRouter from "./houseRouter.js";
import characterRouter from "./characterRouter.js";

import creatorRouter from "./creatorRouter.js";

const router = Router();
router.use(houseRouter)
router.use(creatorRouter)
router.use(characterRouter)

export default router;