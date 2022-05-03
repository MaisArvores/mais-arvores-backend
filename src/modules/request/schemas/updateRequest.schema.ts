import Joi from 'joi';

const updateRequestSchema = Joi.object({
  requestStatus: Joi.object({ id: Joi.number() }).optional(),
  paymentMethod: Joi.object({ id: Joi.string().required() }).optional(),
  deliveryRate: Joi.number().optional(),
  total: Joi.number().optional(),
  products: Joi.array()
    .items(
      Joi.object({
        product: Joi.object({ id: Joi.string() }),
        productQuantity: Joi.number().positive(),
        currentPrice: Joi.number(),
      }),
    )
    .optional(),
});

export default updateRequestSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true,
});
