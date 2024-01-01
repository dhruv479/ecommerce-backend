const router = require('express').Router();

const { errorHandler } = require('../utils/errorHandler');
const {
  loginUserController,
  registerUserController,
} = require('./auth.controller');

router.post('/register', errorHandler(registerUserController));
router.post('/login', errorHandler(loginUserController));

module.exports = router;
