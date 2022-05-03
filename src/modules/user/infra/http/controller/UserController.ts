import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ListUserService } from '../../../services/ListUserService';
import FindUserService from '../../../services/FindUserService';
import UpdateUserService from '../../../services/UpdateUserService';
import AuthenticateUserService from '../../../services/AuthenticateUserService';
import CreateUserService from '../../../services/CreateUserService';
import DeleteUserService from 'modules/user/services/DeleteUserService';

export default class UserController {
  async create(request: Request, response: Response): Promise<void> {
    const data = request.body;

    const createUserService = container.resolve(CreateUserService);

    response.status(201).json(await createUserService.execute(data));
  }

  async listUser(request: Request, response: Response): Promise<void> {
    const listUserService = container.resolve(ListUserService);

    response.json(await listUserService.execute());
  }

  async findById(request: Request, response: Response): Promise<void> {
    const { id } = request.params;

    const findUserService = container.resolve(FindUserService);

    response.json(await findUserService.execute(String(id)));
  }

  async update(request: Request, response: Response): Promise<void> {
    const { id } = request.params;
    const user = request.body;

    const updateUserService = container.resolve(UpdateUserService);

    response.json(await updateUserService.execute(String(id), user));
  }

  async delete(request: Request, response: Response): Promise<void> {
    const { id } = request.params;

    const deleteUserService = container.resolve(DeleteUserService);

    response.json(await deleteUserService.execute(id));
  }

  async authenticate(request: Request, response: Response): Promise<void> {
    const { email, password } = request.body;

    const authenticateUserService = container.resolve(AuthenticateUserService);

    const token = await authenticateUserService.execute({ email, password });

    response.json(token);
  }
}
