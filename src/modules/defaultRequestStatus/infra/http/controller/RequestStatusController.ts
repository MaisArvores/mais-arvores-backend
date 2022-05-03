import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListRequestStatusService } from '../../../services/ListRequestStatusService';
import { FindRequestStatusService } from '../../../services/FindRequestStatusService';

export default class RequestStatusController {
  async list(request: Request, response: Response) {
    const listRequestStatusService = container.resolve(
      ListRequestStatusService,
    );

    response.json(await listRequestStatusService.execute());
  }

  async findById(request: Request, response: Response): Promise<void> {
    const { id } = request.params;

    const findRequestStatusService = container.resolve(
      FindRequestStatusService,
    );

    response.json(await findRequestStatusService.execute(Number(id)));
  }
}
