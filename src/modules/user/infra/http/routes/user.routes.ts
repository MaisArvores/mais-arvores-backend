import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import createUserSchema from '../../../schemas/createUser.schema';
import updateUserSchema from '../../../schemas/updateUser.schema';
import UserController from '../controller/UserController';
import { ensureAuthenticated } from '../../../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../../../middlewares/ensureAdmin';

const userRoutes = Router();

const userController = new UserController();

userRoutes.post(
  '',
  celebrate({ [Segments.BODY]: createUserSchema }),
  userController.create,
);

userRoutes.get('', ensureAuthenticated, ensureAdmin, userController.listUser);

userRoutes.delete('/:id', ensureAuthenticated, userController.delete);

userRoutes.get('/:id', userController.findById);

userRoutes.put(
  '/:id',
  celebrate({ [Segments.BODY]: updateUserSchema }),
  userController.update,
);

userRoutes.post('/login', userController.authenticate);

export { userRoutes };
