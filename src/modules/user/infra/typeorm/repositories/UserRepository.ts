import { injectable } from 'tsyringe';
import { getRepository, Repository } from 'typeorm';
import IUserDTO from '../../../dtos/IUserDTO';
import { IUserRepository } from '../../../repositories/IUserRepository';
import User from '../entities/User';

@injectable()
export default class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async delete(id: string): Promise<void> {
    await this.repository.softDelete(id);
  }

  async update(id: string, user: IUserDTO): Promise<void> {
    await this.repository.update(id, user);
  }

  save(user: IUserDTO): Promise<IUserDTO> {
    const createdUser = this.repository.create(user);
    return this.repository.save(createdUser);
  }

  findByEmail(email: string): Promise<User | undefined> {
    return this.repository.findOne({ email });
  }

  findByUsername(username: string): Promise<User | undefined> {
    return this.repository.findOne({ username });
  }

  listUser(): Promise<IUserDTO[]> {
    return this.repository.find();
  }

  findById(id: string): Promise<IUserDTO | undefined> {
    return this.repository.findOne({ id });
  }
}
