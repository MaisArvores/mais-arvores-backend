import { injectable } from 'tsyringe';
import { getRepository, Repository } from 'typeorm';
import { IProductRepository } from '../../../repositories/IProductRepository';
import IProductDTO from '../../../dtos/IProductDTO';
import Product from '../entities/Product';

@injectable()
export class ProductRepository implements IProductRepository {
  private repository: Repository<Product>;

  constructor() {
    this.repository = getRepository(Product);
  }

  findById(id: string): Promise<IProductDTO | undefined | null> {
    return this.repository.findOne({ id });
  }

  findByName(description: string): Promise<IProductDTO | undefined | null> {
    return this.repository.findOne({ description });
  }

  listProduct(): Promise<IProductDTO[]> {
    return this.repository.find({ relations: ['category'] });
  }

  save(product: IProductDTO): Promise<IProductDTO> {
    const createdProduct = this.repository.create(product);
    return this.repository.save(createdProduct);
  }

  async update(id: string, product: IProductDTO): Promise<void> {
    await this.repository.update(id, product);
  }

  async delete(id: string): Promise<void> {
    await this.repository.softDelete(id);
  }

  async updateImageProduct(id: string, imageName: string): Promise<void> {
    await this.repository.update(id, { image: imageName });
  }
}
