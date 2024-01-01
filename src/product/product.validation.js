const Joi = require('joi');

const getProductValidation = Joi.object().keys({
  category: Joi.string().not(':category').min(3).required(),
  skip: Joi.number().min(0).max(100000).optional(),
  limit: Joi.number().min(5).max(100).optional(),
});

module.exports = { getProductValidation };
