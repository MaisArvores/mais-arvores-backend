import { AppError } from 'shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IRequestDTO } from '../dtos/IRequestDTO';
import { IRequestRepository } from '../repositories/IRequestRepository';

@injectable()
export class UpdateRequestService {
  constructor(
    @inject('RequestRepository')
    private requestRepository: IRequestRepository,
  ) {}

  async execute(id: string, data: IRequestDTO): Promise<void> {
    const request = await this.requestRepository.findById(id);

    if (!request) {
      throw new AppError('Request not found');
    }

    await this.requestRepository.update(id, data);
  }
}
