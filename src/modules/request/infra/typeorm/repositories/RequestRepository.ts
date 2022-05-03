import { injectable } from 'tsyringe';
import { getRepository, Repository } from 'typeorm';
import { IRequestRepository } from '../../../repositories/IRequestRepository';
import { Request } from '../entities/Request';
import { IRequestDTO } from '../../../dtos/IRequestDTO';

@injectable()
export class RequestRepository implements IRequestRepository {
  private repository: Repository<Request>;

  constructor() {
    this.repository = getRepository(Request);
  }

  async delete(id: string): Promise<void> {
    await this.repository.softDelete({ id });
  }

  findById(id: string): Promise<IRequestDTO | undefined> {
    return this.repository.findOne(id, {
      relations: ['requestStatus', 'products'],
    });
  }

  listRequestsByUser(userId: string): Promise<IRequestDTO[]> {
    return this.repository.find({
      where: { user: { id: userId } },
      relations: [
        'paymentMethod',
        'products',
        'products.product',
        'requestStatus',
      ],
    });
  }

  save(request: IRequestDTO): Promise<IRequestDTO> {
    const createdRequest = this.repository.create(request);
    return this.repository.save(createdRequest);
  }

  async update(id: string, request: IRequestDTO): Promise<void> {
    await this.repository.update(id, request);
  }

  listAllRequests(): Promise<IRequestDTO[]> {
    return this.repository.find({
      relations: ['products', 'products.product'],
    });
  }
}
