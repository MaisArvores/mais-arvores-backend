import IProductDTO from '../dtos/IProductDTO';

export interface IProductRepository {
  findByName(description: string): Promise<IProductDTO | undefined | null>;
  save(product: IProductDTO): Promise<IProductDTO>;
  listProduct(): Promise<IProductDTO[]>;
  findById(id: string): Promise<IProductDTO | undefined | null>;
  update(id: string, product: IProductDTO): Promise<void>;
  delete(id: string): Promise<void>;
  updateImageProduct(id: string, imageName: string): Promise<void>;
}
