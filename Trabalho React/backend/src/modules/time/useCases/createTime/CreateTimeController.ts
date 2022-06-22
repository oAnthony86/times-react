import { Request, Response } from "express";

import { CreateTimeUseCase } from "./CreateTimeUseCase";

class CreateTimeController {
  constructor(private createTimeUseCase: CreateTimeUseCase) {}

  handle(request: Request, response: Response): Response {
    const { nome, pais } = request.body;

    this.createTimeUseCase.execute({ nome, pais });

    return response.status(201).send();
  }
}

export { CreateTimeController };
