const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  favorite: Joi.boolean(),
  phone: Joi.string()
    .pattern(/^[0-9]+$/)
    .required(),
});

const paramsSchema = Joi.object({
  contactId: Joi.string().trim().min(1),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = {
  addSchema,
  paramsSchema,
  updateFavoriteSchema,
};
