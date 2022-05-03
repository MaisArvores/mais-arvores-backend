import Joi from 'joi';

const updateUserDetailSchema = Joi.object({
  firstName: Joi.string().optional(),
  lastName: Joi.string().optional(),
  cpf: Joi.string().optional(),
  street: Joi.string().optional(),
  neighborhood: Joi.string().optional(),
  complement: Joi.string().optional(),
  zipCode: Joi.string().optional(),
  city: Joi.string().optional(),
  state: Joi.string().optional(),
  number: Joi.number().optional(),
});

export default updateUserDetailSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true,
});
