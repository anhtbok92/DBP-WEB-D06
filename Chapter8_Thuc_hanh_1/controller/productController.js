const Product = require('../models/productModel');
const asyncHandler = require('express-async-handler');

const getProducts = asyncHandler( async (req, res) => {
   // logic return all products
   const pageSize = 10;
   const page = Number(req.query.pageNumber) || 1;
   const keyword = req.query.keyword ? { name: { $regex: req.query.keyword }} : {};
   const countProducts = await Product.countDocuments({ ...keyword });
   const products = await Product.find({ ...keyword }).limit(pageSize).skip(pageSize * (page - 1));
   res.json({
       products,
       countProducts,
       page
   });
});

const createProduct = asyncHandler( async (req, res) => {
    const { name, description, price, image, brand, category, countInStock } = req.body;
    const { _id } = req.user;
    const product = new Product({
        user: _id,
        name: name,
        description: description,
        price: price,
        image: image,
        brand: brand,
        category: category,
        countInStock: countInStock
    });
    const resultProduct = await product.save();
    res.status(200).json(resultProduct);
});

const createReview = asyncHandler( async (req, res) => {
    const { rating, comment } = req.body;
    const productId = req.params.id;
    const userId = req.user._id;

    // 1. check id exist in database
    const product = await Product.findById(productId);
    if (product) {
        // 2. check user reviewed or yet
        const isReview = product.reviews.find((review) => review.user.toString() === userId.toString());
        if (isReview) {
            res.status(400);
            throw new Error('You already reviewed for this product');
        }

        // 3. luu thong tin nguoi review vao cot review trong bang product
        const reviewContent = {
            name: req.user.name,
            rating: Number(rating),
            comment: comment,
            user: userId
        }
        product.reviews.push(reviewContent);

        // 4. Tinh toan so luong nguoi dang review -> luu vao cot numReviews trong bang product
        product.numReviews = product.reviews.length;

        // BTVN - Khong kho, phai suy nghi
        // 5. Tinh toan so luong rating va chia trung binh
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
        product.rating = 3.5;

        // 6. Thong bao ket qua review ve client
        await product.save();
        res.status(200).json({
            message: 'Review successfully !'
        });
    } else {
        res.status(400);
        throw new Error('Product not found');
    }
});

module.exports = {
    getProducts,
    createProduct,
    createReview
}