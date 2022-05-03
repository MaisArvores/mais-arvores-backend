import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../shared/errors/AppError';
import IUserDTO from '../dtos/IUserDTO';
import { IUserRepository } from '../repositories/IUserRepository';

@injectable()
export default class FindUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(id: string): Promise<Partial<IUserDTO>> {
    const user: Partial<IUserDTO> | undefined | null =
      await this.userRepository.findById(id);

    if (!user) {
      throw new AppError(`User not found`);
    }

    delete user.password;

    return user;
  }
}
