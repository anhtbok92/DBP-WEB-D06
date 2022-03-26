var express = require('express');
var router = express.Router();
const registerUser = require('../controller/userController');

router.post('/', registerUser);

module.exports = router;
