import { TimeRepository } from "../../repositories/TimeRepository";
import { ListTimesController } from "./ListTimesController";
import { ListTimesUseCase } from "./ListTimesUseCase";

const timeRepository = TimeRepository.getInstance();
const listTimesUseCase = new ListTimesUseCase(timeRepository);
const listTimesController = new ListTimesController(listTimesUseCase);

export { listTimesController };
