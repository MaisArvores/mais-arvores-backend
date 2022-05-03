import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { IRequestDTO } from '../../../dtos/IRequestDTO';
import { DefaultEntity } from '../../../../../shared/infra/typeorm/entities/DefaultEntity';
import User from '../../../../user/infra/typeorm/entities/User';
import { PaymentMethod } from '../../../../paymentMethod/infra/typeorm/entities/PaymentMethod';
import { RequestProduct } from './RequestProduct';
import RequestStatus from '../../../../defaultRequestStatus/infra/typeorm/entities/RequestStatus';

@Entity('request')
export class Request extends DefaultEntity implements IRequestDTO {
  @PrimaryColumn({ name: 'id' })
  id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;

  @ManyToOne(() => PaymentMethod)
  @JoinColumn({ name: 'payment_method_id', referencedColumnName: 'id' })
  paymentMethod: PaymentMethod;

  @Column({ name: 'request_date' })
  date: Date;

  @Column({ name: 'delivery_rate' })
  deliveryRate: number;

  @Column()
  total: number;

  @OneToMany(() => RequestProduct, product => product.request, {
    cascade: true,
  })
  products: RequestProduct[];

  @ManyToOne(() => RequestStatus)
  @JoinColumn({ name: 'id_default_request_status' })
  requestStatus: RequestStatus;

  constructor() {
    super();
    if (!this.id) {
      this.id = uuid();
    }
  }
}
