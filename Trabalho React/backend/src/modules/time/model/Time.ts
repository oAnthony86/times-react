import { v4 as uuidV4 } from "uuid";

class Time {
  id?: string;
  nome: string;
  pais: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Time };
