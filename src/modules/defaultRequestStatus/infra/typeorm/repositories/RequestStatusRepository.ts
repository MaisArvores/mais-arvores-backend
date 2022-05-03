import { injectable } from 'tsyringe';
import { Repository, getRepository } from 'typeorm';
import { IRequestStatusRepository } from '../../../repositories/IRequestStatusRepository';
import RequestStatus from '../entities/RequestStatus';
import IRequestStatusDTO from '../../../dtos/IRequestStatusDTO';
import dataSource from '../../../../../shared/infra/typeorm';

@injectable()
export default class RequestStatusRepository
  implements IRequestStatusRepository
{
  private repository: Repository<RequestStatus>;

  constructor() {
    this.repository = getRepository(RequestStatus);
  }

  findById(id: number): Promise<IRequestStatusDTO | undefined | null> {
    return this.repository.findOne(id);
  }

  list(): Promise<IRequestStatusDTO[]> {
    return this.repository.find();
  }
}
