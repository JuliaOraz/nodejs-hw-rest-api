const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string()
    .pattern(/^[0-9]+$/)
    .required(),
});

const paramsSchema = Joi.string().trim().min(1);

module.exports = {
  addSchema,
  paramsSchema,
};
