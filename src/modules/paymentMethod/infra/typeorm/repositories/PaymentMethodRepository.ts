import { getRepository, Repository } from 'typeorm';
import { IPaymentMethodRepository } from '../../../repositories/IPaymentMethodRepository';
import { IPaymentMethodDTO } from '../../../dtos/IPaymentMethodDTO';
import { PaymentMethod } from '../entities/PaymentMethod';

export class PaymentMethodRepository implements IPaymentMethodRepository {
  private repository: Repository<PaymentMethod>;

  constructor() {
    this.repository = getRepository(PaymentMethod);
  }

  save(paymentMethod: IPaymentMethodDTO): Promise<IPaymentMethodDTO> {
    const createdPayment = this.repository.create(paymentMethod);
    return this.repository.save(createdPayment);
  }

  findByDescription(
    description: string,
  ): Promise<IPaymentMethodDTO | undefined | null> {
    return this.repository.findOne({ description });
  }

  list(): Promise<IPaymentMethodDTO[]> {
    return this.repository.find();
  }

  findById(id: string): Promise<IPaymentMethodDTO | undefined | null> {
    return this.repository.findOne({ id });
  }

  async update(id: string, paymentMethod: IPaymentMethodDTO): Promise<void> {
    await this.repository.update(id, paymentMethod);
  }

  async delete(id: string): Promise<void> {
    await this.repository.softDelete({ id });
  }
}
