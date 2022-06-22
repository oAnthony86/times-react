import { Request, Response } from "express";

import { ListTimesUseCase } from "./ListTimesUseCase";

class ListTimesController {
  constructor(private listTimesUseCase: ListTimesUseCase) {}

  handle(request: Request, response: Response): Response {
    const all = this.listTimesUseCase.execute();

    return response.json(all);
  }
}

export { ListTimesController };
