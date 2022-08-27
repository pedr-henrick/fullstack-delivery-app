const { Router } = require('express');
const { loginRouter } = require('./login.router');
const sellerRouter = require('./seller.router');

const router = Router();

router.use('/', loginRouter);
router.use('/seller', sellerRouter);

module.exports = { router };
