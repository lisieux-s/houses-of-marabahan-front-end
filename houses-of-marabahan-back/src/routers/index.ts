import { Router } from "express";


import houseRouter from "./houseRouter.js";
import characterRouter from "./characterRouter.js";
import kindRouter from "./kindRouter.js";
import itemRouter from "./itemRouter.js";

import creatorRouter from "./creatorRouter.js";

const router = Router();
router.use(houseRouter)
router.use(characterRouter)
router.use(kindRouter)
router.use(itemRouter)

router.use(creatorRouter)

export default router;