import { injectable } from 'tsyringe';
import { getRepository, Repository } from 'typeorm';
import { IUserDetailDTO } from '../../../dtos/IUserDetailDTO';
import { IUserDetailRepository } from '../../../repositories/IUserDetailRepository';
import { UserDetail } from '../entities/UserDetail';

@injectable()
export class UserDetailRepository implements IUserDetailRepository {
  private repository: Repository<UserDetail>;

  constructor() {
    this.repository = getRepository(UserDetail);
  }

  findByRG(cpf: string): Promise<IUserDetailDTO | undefined> {
    return this.repository.findOne({ cpf });
  }

  save(userDetail: IUserDetailDTO): Promise<IUserDetailDTO> {
    const createdUserDetail = this.repository.create(userDetail);
    return this.repository.save(createdUserDetail);
  }

  list(): Promise<IUserDetailDTO[]> {
    return this.repository.find();
  }

  async update(id: string, userDetail: IUserDetailDTO): Promise<void> {
    await this.repository.update(id, userDetail);
  }

  findById(id: string): Promise<IUserDetailDTO | undefined> {
    return this.repository.findOne(id);
  }
}
