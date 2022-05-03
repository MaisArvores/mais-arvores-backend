import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { DefaultEntity } from '../../../../../shared/infra/typeorm/entities/DefaultEntity';
import { IRequestProductDTO } from '../../../dtos/IRequestProductDTO';
import Product from '../../../../product/infra/typeorm/entities/Product';
import { Request } from './Request';

@Entity('product_request')
export class RequestProduct
  extends DefaultEntity
  implements IRequestProductDTO
{
  @ManyToOne(() => Product, { primary: true })
  @JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
  product: Product;

  @ManyToOne(() => Request, { primary: true })
  @JoinColumn({ name: 'request_id', referencedColumnName: 'id' })
  request: Request;

  @Column({ name: 'product_quantity' })
  productQuantity: number;

  @Column({ name: 'current_price' })
  currentPrice: number;
}
