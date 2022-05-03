import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { DefaultEntity } from '../../../../../shared/infra/typeorm/entities/DefaultEntity';
import { IUserDetailDTO } from '../../../dtos/IUserDetailDTO';

import User from '../../../../user/infra/typeorm/entities/User';

@Entity('user_detail')
export class UserDetail extends DefaultEntity implements IUserDetailDTO {
  @OneToOne(() => User, { primary: true, eager: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;

  @Column()
  city: string;

  @Column()
  complement: string;

  @Column()
  cpf: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column()
  neighborhood: string;

  @Column()
  number: number;

  @Column()
  state: string;

  @Column()
  street: string;

  @Column({ name: 'zip_code' })
  zipCode: string;
}
