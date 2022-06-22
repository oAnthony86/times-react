import { Router } from "express";

import { createTimeController } from "../modules/time/useCases/createTime";
import { deleteTimeController } from "../modules/time/useCases/deleteTime";
import { listTimesController } from "../modules/time/useCases/listTimes";
import { updateTimeController } from "../modules/time/useCases/updateTime";

const timesRoutes = Router();

timesRoutes.get("/", (request, response) => {
  return listTimesController.handle(request, response);
});

timesRoutes.post("/", (request, response) => {
  return createTimeController.handle(request, response);
});

timesRoutes.patch("/:id", (request, response) => {
  return updateTimeController.handle(request, response);
});

timesRoutes.delete("/:id", (request, response) => {
  return deleteTimeController.handle(request, response);
});

export { timesRoutes };
