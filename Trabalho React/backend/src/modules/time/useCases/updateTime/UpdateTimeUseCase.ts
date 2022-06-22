import { TimeRepository } from "../../repositories/TimeRepository";

interface IRequest {
  nome: string;
  pais: string;
}

class UpdateTimeUseCase {
  constructor(private timesRepository: TimeRepository) {}

  execute(id: string, { nome, pais }: IRequest) {
    this.timesRepository.update(id, { nome, pais });
  }
}

export { UpdateTimeUseCase };
