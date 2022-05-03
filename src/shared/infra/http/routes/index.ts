import { Router } from 'express';
import { userRoutes } from '../../../../modules/user/infra/http/routes/user.routes';
import { categoryRoutes } from '../../../../modules/category/infra/http/routes/category.routes';
import { productRoutes } from '../../../../modules/product/infra/http/routes/product.routes';
import { userDetailRoutes } from '../../../../modules/userDetail/infra/http/routes/userDetail.routes';
import { paymentMethodRoutes } from '../../../../modules/paymentMethod/infra/http/routes/paymentMethod.routes';
import { requestRoutes } from '../../../../modules/request/infra/http/routes/request.routes';
import { requestStatusRoutes } from '../../../../modules/defaultRequestStatus/infra/http/routes/requestStatus.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/users-detail', userDetailRoutes);
routes.use('/categories', categoryRoutes);
routes.use('/products', productRoutes);
routes.use('/payment-method', paymentMethodRoutes);
routes.use('/request', requestRoutes);
routes.use('/request-status', requestStatusRoutes);

export { routes };
