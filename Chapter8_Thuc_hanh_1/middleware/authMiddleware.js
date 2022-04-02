const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

// 1. Kiểm tra token có hợp lệ hay không
const protect = asyncHandler (async (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization && authorization.startsWith('Bearer')) {
        // token valid
        try {
            const token = req.headers.authorization.split(' ')[1];
            const userVerify = jwt.verify(token, 'masobimat123');
            req.user = await User.findById(userVerify.id).select('-password');
            next();
        } catch (error) {
            res.status(401);
            throw new Error('Not authorized or no token or token invalid');
        }
    } else {
        res.status(401);
        throw new Error('Not authorized or no token or token invalid');
    }
});

// 2. Kiểm tra user đang gửi lên token có phải là admin hay không ?
const isAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401);
        throw new Error('Member is not admin');
    }
}

module.exports = {
    protect,
    isAdmin
}