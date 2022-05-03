import IRequestStatusDTO from '../dtos/IRequestStatusDTO';

export interface IRequestStatusRepository {
  list(): Promise<IRequestStatusDTO[]>;
  findById(id: number): Promise<IRequestStatusDTO | undefined | null>;
}
