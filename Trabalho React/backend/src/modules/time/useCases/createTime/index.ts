import { TimeRepository } from "../../repositories/TimeRepository";
import { CreateTimeController } from "./CreateTimeController";
import { CreateTimeUseCase } from "./CreateTimeUseCase";

const timeRepository = TimeRepository.getInstance();
const createTimeUseCase = new CreateTimeUseCase(timeRepository);
const createTimeController = new CreateTimeController(
  createTimeUseCase
);

export { createTimeController };
