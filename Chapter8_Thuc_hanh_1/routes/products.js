var express = require('express');
var router = express.Router();
const { protect, isAdmin } = require('../middleware/authMiddleware');
const { getProducts, createProduct, createReview } = require('../controller/productController');

// 1.
// @desc: Get all products
// @route: GET /api/products
// @access: Public
router.get('/', getProducts);

// 2.
// @desc: Create a product
// @route: POST /api/products
// @access: Private/admin
router.post('/', protect, isAdmin, createProduct);

// 3.
// @desc: Create Review for product
// @route: POST /api/products/:id/reviews
// @access: Private
router.post('/:id/reviews', protect, createReview);

module.exports = router;