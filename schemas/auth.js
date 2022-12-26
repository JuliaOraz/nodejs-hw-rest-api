const Joi = require("joi");

const emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const subscription = ["starter", "pro", "business"];

const registerSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().required(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().required(),
});

const subscriptionSchema = Joi.object({
  subscription: Joi.string()
    .valid(...subscription)
    .required(),
});

module.exports = {
  registerSchema,
  loginSchema,
  subscriptionSchema,
};
