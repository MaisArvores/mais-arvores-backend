import { inject, injectable } from 'tsyringe';
import { ICategoryRepository } from '../repositories/ICategoryRepository';
import ICategoryDTO from '../dtos/ICategoryDTO';
import { AppError } from '../../../shared/errors/AppError';

@injectable()
export class UpdateCategoryService {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository,
  ) {}

  async execute(id: string, category: ICategoryDTO): Promise<void> {
    const foundCategory = await this.categoryRepository.findById(id);

    if (!foundCategory) {
      throw new AppError('RequestStatus not found');
    }

    await this.categoryRepository.update(id, category);
  }
}
