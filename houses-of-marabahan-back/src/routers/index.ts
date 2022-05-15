import { Router } from "express";

import houseRouter from "./houseRouter.js";

const router = Router();
router.use(houseRouter)

export default router;