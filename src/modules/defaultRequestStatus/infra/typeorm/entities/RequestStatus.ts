import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { DefaultEntity } from '../../../../../shared/infra/typeorm/entities/DefaultEntity';
import IRequestStatusDTO from '../../../dtos/IRequestStatusDTO';

@Entity('default_request_status')
export default class RequestStatus implements IRequestStatusDTO {
  @PrimaryColumn({ name: 'id_default_request_status' })
  readonly id: number;

  @Column()
  description: string;
}
