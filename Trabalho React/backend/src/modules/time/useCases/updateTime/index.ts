import { TimeRepository } from "../../repositories/TimeRepository";
import { UpdateTimeController } from "./UpdateTimeController";
import { UpdateTimeUseCase } from "./UpdateTimeUseCase";

const timeRepository = TimeRepository.getInstance();
const updateTimeUseCase = new UpdateTimeUseCase(timeRepository);
const updateTimeController = new UpdateTimeController(
  updateTimeUseCase
);

export { updateTimeController };
