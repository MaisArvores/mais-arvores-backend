import { AppError } from 'shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../repositories/IUserRepository';

@injectable()
export default class DeleteUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const user = this.userRepository.findById(id);

    if (!user) {
      throw new AppError('User not found');
    }

    await this.userRepository.delete(id);
  }
}
