import { Time } from "../model/Time";

interface ICreateTimeDTO {
  nome: string;
  pais: string;
}

interface IUpdateTimeDTO {
  nome: string;
  pais: string;
}

class TimeRepository {
  private times: Time[];

  private static INSTANCE: TimeRepository;

  private constructor() {
    this.times = [];
  }

  public static getInstance(): TimeRepository {
    if (!TimeRepository.INSTANCE) {
      TimeRepository.INSTANCE = new TimeRepository();
    }
    return TimeRepository.INSTANCE;
  }

  list() {
    return this.times;
  }

  create({ nome, pais }: ICreateTimeDTO) {
    const time = new Time();

    Object.assign(time, {
      nome,
      pais,
      created_at: new Date(),
    });

    this.times.push(time);
  }

  update(id: string, { nome, pais }: IUpdateTimeDTO) {
    const time = this.findById(id);

    if (time) {
      const indice = this.times.findIndex((p) => p.id === id);

      const timeUpdated: Time = {
        ...time,
        nome,
        pais,
      };

      this.times[indice] = timeUpdated;
    }
  }

  delete(id: string) {
    const newList = this.times.filter((p) => p.id !== id);

    this.times = newList;
  }

  findById(id: string): Time | undefined {
    const user = this.times.find((u) => u.id === id);

    return user;
  }
}

export { TimeRepository };
