import Joi from 'joi';

const createUserDetailSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  cpf: Joi.string().required(),
  street: Joi.string().required(),
  neighborhood: Joi.string().required(),
  complement: Joi.string().optional(),
  zipCode: Joi.string().required(),
  city: Joi.string().required(),
  state: Joi.string().required(),
  number: Joi.number().required(),
});

export default createUserDetailSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true,
});
