const router = require('express').Router();

const { errorHandler } = require('../utils/errorHandler');
const { verifyUser } = require('../utils/token');
const {
  getCategoriesListController,
  getCategoryProductListController,
} = require('./product.controller');

router.get(
  '/categories',
  verifyUser,
  errorHandler(getCategoriesListController)
);
router.get(
  '/category/:category',
  verifyUser,
  errorHandler(getCategoryProductListController)
);

module.exports = router;
