import ICategoryDTO from '../dtos/ICategoryDTO';

export interface ICategoryRepository {
  findByDescription(
    description: string,
  ): Promise<ICategoryDTO | undefined | null>;
  save(category: ICategoryDTO): Promise<ICategoryDTO>;
  list(): Promise<ICategoryDTO[]>;
  findById(id: string): Promise<ICategoryDTO | undefined | null>;
  update(id: string, category: ICategoryDTO): Promise<void>;
  delete(id: string): Promise<void>;
}
