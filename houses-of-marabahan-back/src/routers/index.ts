import { Router } from "express";


import houseRouter from "./houseRouter.js";

import creatorRouter from "./creatorRouter.js";

const router = Router();
router.use(houseRouter)
router.use(creatorRouter)

export default router;