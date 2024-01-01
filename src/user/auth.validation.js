const Joi = require('joi');

const createUserValidation = Joi.object().keys({
  name: Joi.string().max(25).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')),
});

const loginUserValidation = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')),
});

module.exports = { createUserValidation, loginUserValidation };
