import { inject, injectable } from 'tsyringe';
import { IRequestStatusRepository } from '../repositories/IRequestStatusRepository';
import IRequestStatusDTO from '../dtos/IRequestStatusDTO';
import { AppError } from '../../../shared/errors/AppError';

@injectable()
export class FindRequestStatusService {
  constructor(
    @inject('RequestStatusRepository')
    private requestStatusRepository: IRequestStatusRepository,
  ) {}

  async execute(id: number): Promise<IRequestStatusDTO> {
    const requestStatus = await this.requestStatusRepository.findById(id);

    if (!requestStatus) {
      throw new AppError('RequestStatus not found');
    }

    return requestStatus;
  }
}
