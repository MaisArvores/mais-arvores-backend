import { inject, injectable } from 'tsyringe';
import { IRequestStatusRepository } from '../repositories/IRequestStatusRepository';
import IRequestStatusDTO from '../dtos/IRequestStatusDTO';

@injectable()
export class ListRequestStatusService {
  constructor(
    @inject('RequestStatusRepository')
    private requestStatusRepository: IRequestStatusRepository,
  ) {}

  async execute(): Promise<IRequestStatusDTO[]> {
    return this.requestStatusRepository.list();
  }
}
