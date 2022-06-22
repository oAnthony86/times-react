import { TimeRepository } from "../../repositories/TimeRepository";

interface IRequest {
  nome: string;
  pais: string;
}

class CreateTimeUseCase {
  constructor(private timesRepository: TimeRepository) {}
  execute({ nome, pais }: IRequest) {
    this.timesRepository.create({ nome, pais });
  }
}

export { CreateTimeUseCase };
