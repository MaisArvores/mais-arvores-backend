import { AppError } from 'shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IRequestDTO } from '../dtos/IRequestDTO';
import { IRequestRepository } from '../repositories/IRequestRepository';

@injectable()
export default class FindRequestService {
  constructor(
    @inject('RequestRepository')
    private requestRepostory: IRequestRepository,
  ) {}

  async execute(id: string): Promise<IRequestDTO | undefined> {
    const request = await this.requestRepostory.findById(id);

    if (!request) {
      throw new AppError('Request not found');
    }

    return request;
  }
}
