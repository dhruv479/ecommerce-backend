const { default: axios } = require('axios');
const {
  GET_CATEGORIES_URL,
  GET_CATEGORY_PRODUCTS_URL,
} = require('./constants');
const { getProductValidation } = require('./product.validation');
const Boom = require('@hapi/boom');

const getCategoriesListController = async (req, res) => {
  const result = await axios.get(GET_CATEGORIES_URL);
  return res.json({
    data: result.data,
    message: 'OK',
    success: true,
  });
};

const getCategoryProductListController = async (req, res) => {
  const { error } = getProductValidation.validate({
    ...req.params,
    ...req.query,
  });
  if (error) {
    throw Boom.badData(error.message);
  }
  const { category } = req.params;
  const { skip, limit } = req.query;
  const result = await axios.get(
    GET_CATEGORY_PRODUCTS_URL(category, skip, limit)
  );
  return res.json({
    data: result.data,
    message: 'OK',
    success: true,
  });
};

module.exports = {
  getCategoriesListController,
  getCategoryProductListController,
};
