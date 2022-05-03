import { Router } from 'express';
import { celebrate, Segments } from 'celebrate';
import RequestStatusController from '../controller/RequestStatusController';
import { ensureAuthenticated } from '../../../../user/middlewares/ensureAuthenticated';

const requestStatusRoutes = Router();

const requestStatusController = new RequestStatusController();

requestStatusRoutes.get('', ensureAuthenticated, requestStatusController.list);
requestStatusRoutes.get(
  '/:id',
  ensureAuthenticated,
  requestStatusController.findById,
);

export { requestStatusRoutes };
