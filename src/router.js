const router = require('express').Router();

const authRouter = require('./user/auth.routes');
const productRouter = require('./product/product.routes');

router.use('/auth', authRouter);
router.use('/products', productRouter);

module.exports = router;
