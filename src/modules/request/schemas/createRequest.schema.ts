import Joi from 'joi';

const createRequestSchema = Joi.object({
  requestStatus: Joi.object({ id: Joi.number() }).default({ id: 1 }),
  paymentMethod: Joi.object({ id: Joi.string().required() }).required(),
  deliveryRate: Joi.number().required(),
  total: Joi.number().required(),
  products: Joi.array().items(
    Joi.object({
      product: Joi.object({ id: Joi.string() }),
      productQuantity: Joi.number().positive(),
      currentPrice: Joi.number(),
    }),
  ),
});

export default createRequestSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true,
});
