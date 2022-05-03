import { inject, injectable } from 'tsyringe';

import { ITokenManagerProvider } from 'shared/providers/TokenManagerProvider/ITokenManagerProvider';
import { IUserRepository } from '../repositories/IUserRepository';
import { AppError } from '../../../shared/errors/AppError';
import { IEncoderProvider } from '../../../shared/providers/EncoderProvider/IEncoderProvider';
import api from '../../../config/api';

interface IAuthenticateRequest {
  email: string;
  password: string;
}
@injectable()
export default class AuthenticateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
    @inject('EncoderProvider')
    private encoderProvider: IEncoderProvider,
    @inject('TokenManagerProvider')
    private tokenManagerProvider: ITokenManagerProvider,
  ) {}

  async execute(data: IAuthenticateRequest) {
    const user = await this.userRepository.findByEmail(data.email);

    if (!user) {
      throw new AppError('Email or password incorrect');
    }
    if (user.isActive === false) {
      throw new AppError('User inactive. Please, contact the support');
    }
    const passwordMatch = await this.encoderProvider.compare(
      data.password,
      user.password,
    );

    if (!passwordMatch) {
      throw new AppError('Email or password incorrect');
    }

    const apiConfig = api();

    return this.tokenManagerProvider.sign({}, apiConfig.JWT_SECRET, {
      subject: user.id,
      expiresIn: '1d',
    });
  }
}
