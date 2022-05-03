import { IDefaultDTO } from '../../../shared/dtos/IDefaultDTO';
import IUserDTO from '../../user/dtos/IUserDTO';

export interface IUserDetailDTO extends IDefaultDTO {
  user: IUserDTO;
  firstName: string;
  lastName: string;
  cpf: string;
  street: string;
  neighborhood: string;
  complement: string;
  zipCode: string;
  city: string;
  state: string;
  number: number;
}
