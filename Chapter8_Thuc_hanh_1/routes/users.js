var express = require('express');
var router = express.Router();
const { protect, isAdmin } = require('../middleware/authMiddleware');
const {
    getUsers,
    registerUser,
    authLogin,
    getUserProfile,
    updateUserProfile
} = require('../controller/userController');

// 1.
// @desc: Register new user
// @route: POST /api/users
// @access: Public - return token
router.post('/', registerUser);

// 2.
// @desc: Get all users
// @route: GET /api/users
// @access: Private/admin
router.get('/', protect, isAdmin, getUsers);

// 3.
// @desc: Login API
// @route: POST /api/users/login
// @access: Public - return token
router.post('/login', authLogin);

// 4.
// @desc: Get profile user
// @route: GET /api/users/profile
// @access: Private - Su dung token
router.get('/profile', protect, getUserProfile);

// 5.
// @desc: Update profile user
// @route: PUT /api/users/profile
// @access: Private - Su dung token
router.put('/profile', protect, updateUserProfile);

// 6.
// @desc Delete user
// @route: GET /api/users/:id
// @access: Private/admin

// 7.
// @desc Get user by Id
// @route: GET /api/users/:id
// @access: Private/admin

// 8.
// @desc Update by Id
// @route: GET /api/users/:id
// @access: Private/admin

module.exports = router;
