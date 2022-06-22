import { Request, Response } from "express";

import { DeleteTimeUseCase } from "./DeleteTimeUseCase";

class DeleteTimeController {
  constructor(private deleteTimeUseCase: DeleteTimeUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.params;

    this.deleteTimeUseCase.execute(id);

    return response.send();
  }
}

export { DeleteTimeController };
