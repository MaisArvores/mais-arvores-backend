import { inject, injectable } from 'tsyringe';
import { ICategoryRepository } from '../repositories/ICategoryRepository';
import ICategoryDTO from '../dtos/ICategoryDTO';
import { AppError } from '../../../shared/errors/AppError';

@injectable()
export class FindCategoryService {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository,
  ) {}

  async execute(id: string): Promise<ICategoryDTO> {
    const category = await this.categoryRepository.findById(id);

    if (!category) {
      throw new AppError('RequestStatus not found');
    }

    return category;
  }
}
