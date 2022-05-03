import { IPaymentMethodDTO } from '../dtos/IPaymentMethodDTO';

export interface IPaymentMethodRepository {
  save(paymentMethod: IPaymentMethodDTO): Promise<IPaymentMethodDTO>;
  findByDescription(
    description: string,
  ): Promise<IPaymentMethodDTO | undefined | null>;
  list(): Promise<IPaymentMethodDTO[]>;
  findById(id: string): Promise<IPaymentMethodDTO | undefined | null>;
  update(id: string, paymentMethod: IPaymentMethodDTO): Promise<void>;
  delete(id: string): Promise<void>;
}
