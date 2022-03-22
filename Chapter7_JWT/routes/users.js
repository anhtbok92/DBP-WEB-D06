var express = require('express');
var router = express.Router();
const User = require('../models/user.model');
const { registerValidation, loginValidation } = require('../auth/validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const verifyToken = require('../auth/checkToken');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/register', async function (req, res) {
  // validate info of user
  const { error } = registerValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  // Check email exists in db
  const emailExist = await User.findOne({ email: req.body.email });
  console.log('emailExits', emailExist);
  if (emailExist) {
    return res.status(400).send('Email exists in database. Please register with other email');
  }

  // Hash password
  const passwordSalt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, passwordSalt);

  const newUser = new User();
  newUser.name = req.body.name;
  newUser.email = req.body.email;
  newUser.password = hashedPassword;

  try {
    const user = await newUser.save();
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/login', async function (req, res) {
  // 1. validate user info
  const { error } = loginValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  // 2. Check email exists in db
  const userLogin = await User.findOne({ email: req.body.email });
  if (!userLogin) {
    return res.status(400).send('Email not exists in database');
  }

  // 3. Check password
  const checkPassword = await bcrypt.compare(req.body.password, userLogin.password);
  if (!checkPassword) {
    return res.status(400).send('Password invalid');
  }

  // 4. Return token jwt
  const token = jwt.sign({ _id: userLogin._id }, 'masobimatkhongdctietlo');

  // 5. Add token to header
  res.header('auth-token', token).send(token);
});

router.get('/', verifyToken, function (req, res) {
  res.send('Welcome to website !!!');
});

module.exports = router;
