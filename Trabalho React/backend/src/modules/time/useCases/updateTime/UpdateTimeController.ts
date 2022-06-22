import { Request, Response } from "express";

import { UpdateTimeUseCase } from "./UpdateTimeUseCase";

class UpdateTimeController {
  constructor(private updateTimeUseCase: UpdateTimeUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.params;
    const { nome, pais } = request.body;

    this.updateTimeUseCase.execute(id, { nome, pais });

    return response.send();
  }
}

export { UpdateTimeController };
