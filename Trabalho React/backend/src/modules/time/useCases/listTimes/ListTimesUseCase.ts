import { Time } from "../../model/Time";
import { TimeRepository } from "../../repositories/TimeRepository";

class ListTimesUseCase {
  constructor(private timesRepository: TimeRepository) {}
  execute(): Time[] {
    const times = this.timesRepository.list();

    return times;
  }
}

export { ListTimesUseCase };
