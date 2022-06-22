import { TimeRepository } from "../../repositories/TimeRepository";

class DeleteTimeUseCase {
  constructor(private timesRepository: TimeRepository) {}
  execute(id: string) {
    this.timesRepository.delete(id);
  }
}

export { DeleteTimeUseCase };
