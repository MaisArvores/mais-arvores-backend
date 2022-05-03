import { container } from 'tsyringe';
import { IEncoderProvider } from '../providers/EncoderProvider/IEncoderProvider';
import { BcryptEncoderProvider } from '../providers/EncoderProvider/implementations/BcryptEncoderProvider';
import { JwtTokenManagerProvider } from '../providers/TokenManagerProvider/implementations/JwtTokenManagerProvider';
import { ITokenManagerProvider } from '../providers/TokenManagerProvider/ITokenManagerProvider';
import { IUserRepository } from '../../modules/user/repositories/IUserRepository';
import UserRepository from '../../modules/user/infra/typeorm/repositories/UserRepository';
import CategoryRepository from '../../modules/category/infra/typeorm/repositories/CategoryRepository';
import { ICategoryRepository } from '../../modules/category/repositories/ICategoryRepository';
import { IProductRepository } from '../../modules/product/repositories/IProductRepository';
import { ProductRepository } from '../../modules/product/infra/typeorm/repositories/ProductRepository';
import { IUserDetailRepository } from '../../modules/userDetail/repositories/IUserDetailRepository';
import { UserDetailRepository } from '../../modules/userDetail/infra/typeorm/repositories/UserDetailRepository';
import { IPaymentMethodRepository } from '../../modules/paymentMethod/repositories/IPaymentMethodRepository';
import { PaymentMethodRepository } from '../../modules/paymentMethod/infra/typeorm/repositories/PaymentMethodRepository';
import { IRequestRepository } from '../../modules/request/repositories/IRequestRepository';
import { RequestRepository } from '../../modules/request/infra/typeorm/repositories/RequestRepository';
import { IRequestStatusRepository } from '../../modules/defaultRequestStatus/repositories/IRequestStatusRepository';
import RequestStatusRepository from '../../modules/defaultRequestStatus/infra/typeorm/repositories/RequestStatusRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<ICategoryRepository>(
  'CategoryRepository',
  CategoryRepository,
);
container.registerSingleton<IProductRepository>(
  'ProductRepository',
  ProductRepository,
);

container.registerSingleton<IUserDetailRepository>(
  'UserDetailRepository',
  UserDetailRepository,
);

container.registerSingleton<IPaymentMethodRepository>(
  'PaymentMethodRepository',
  PaymentMethodRepository,
);

container.registerSingleton<IRequestRepository>(
  'RequestRepository',
  RequestRepository,
);

container.registerSingleton<IRequestStatusRepository>(
  'RequestStatusRepository',
  RequestStatusRepository,
);

// Providers

container.registerInstance<IEncoderProvider>(
  'EncoderProvider',
  new BcryptEncoderProvider(8),
);

container.registerSingleton<ITokenManagerProvider>(
  'TokenManagerProvider',
  JwtTokenManagerProvider,
);
