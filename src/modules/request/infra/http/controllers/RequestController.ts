import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateRequestService } from '../../../services/CreateRequestService';
import { ListRequestByUserService } from '../../../services/ListRequestByUserService';
import IUserDTO from '../../../../user/dtos/IUserDTO';
import { ListAllRequestsService } from '../../../services/ListAllRequestsService';
import FindRequestService from 'modules/request/services/FindRequestService';
import { UpdateRequestService } from 'modules/request/services/UpdateRequestService';

export class RequestController {
  async create(request: Request, response: Response): Promise<void> {
    const data = request.body;
    data.user = request.userId;

    const createRequestService = container.resolve(CreateRequestService);

    response.status(201).json(await createRequestService.execute(data));
  }

  async listByUser(request: Request, response: Response): Promise<void> {
    const user = request.userId;

    const listRequestService = container.resolve(ListRequestByUserService);

    response.json(await listRequestService.execute(user));
  }

  async listAll(request: Request, response: Response): Promise<void> {
    const listAllRequestService = container.resolve(ListAllRequestsService);

    response.json(await listAllRequestService.execute());
  }

  async find(request: Request, response: Response): Promise<void> {
    const { id } = request.params;

    const findRequestService = container.resolve(FindRequestService);

    response.json(await findRequestService.execute(id));
  }

  async update(request: Request, response: Response): Promise<void> {
    const { data } = request.body;
    const { id } = request.params;

    const updateRequestService = container.resolve(UpdateRequestService);

    response.json(await updateRequestService.execute(String(id), data));
  }
}
