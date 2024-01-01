const path = require('path');

const EXTERNAL_BASE_URL = 'https://dummyjson.com';

const GET_CATEGORIES_URL = path.join(EXTERNAL_BASE_URL, 'products/categories');

const GET_CATEGORY_PRODUCTS_URL = (category, skip = 0, limit = 10) =>
  path.join(
    EXTERNAL_BASE_URL,
    'products/category',
    category,
    '?select=title,price,images,rating,',
    `&skip=${skip}&limit=${limit}`
  );

module.exports = { GET_CATEGORY_PRODUCTS_URL, GET_CATEGORIES_URL };
