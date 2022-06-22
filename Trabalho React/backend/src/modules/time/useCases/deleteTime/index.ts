import { TimeRepository } from "../../repositories/TimeRepository";
import { DeleteTimeController } from "./DeleteTimeController";
import { DeleteTimeUseCase } from "./DeleteTimeUseCase";

const timeRepository = TimeRepository.getInstance();
const deleteTimeUseCase = new DeleteTimeUseCase(timeRepository);
const deleteTimeController = new DeleteTimeController(
  deleteTimeUseCase
);

export { deleteTimeController };
