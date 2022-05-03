import { IUserDetailDTO } from '../dtos/IUserDetailDTO';

export interface IUserDetailRepository {
  save(userDetail: IUserDetailDTO): Promise<IUserDetailDTO>;
  list(): Promise<IUserDetailDTO[]>;
  findById(id: string): Promise<IUserDetailDTO | undefined>;
  findByRG(rg: string): Promise<IUserDetailDTO | undefined>;
  update(id: string, userDetail: IUserDetailDTO): Promise<void>;
}
