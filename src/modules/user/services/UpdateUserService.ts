import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../shared/errors/AppError';
import IUserDTO from '../dtos/IUserDTO';
import { IUserRepository } from '../repositories/IUserRepository';

@injectable()
export default class UpdateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(id: string, data: IUserDTO): Promise<void> {
    await this.validateNewUserInformations({ ...data, id });

    await this.userRepository.update(id, data);
  }

  private async validateNewUserInformations(data: IUserDTO): Promise<void> {
    const user = await this.userRepository.findById(String(data.id));

    if (!user) {
      throw new AppError(`User not found`);
    }

    if (data.email && data.email !== user.email) {
      const isEmailAlreadyRegistered = !!(await this.userRepository.findByEmail(
        data.email,
      ));

      if (isEmailAlreadyRegistered) {
        throw new AppError('Email already registered');
      }
    }

    if (data.username && data.username !== user.username) {
      const isUserNameAlreadyRegistered =
        !!(await this.userRepository.findByUsername(data.username));

      if (isUserNameAlreadyRegistered) {
        throw new AppError('Email already registered');
      }
    }
  }
}
