import { Router } from "express";

import { timesRoutes } from "./time.routes";

const router = Router();

router.use("/time", timesRoutes);

export { router };
