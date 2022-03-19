var express = require('express');
var router = express.Router();

/* GET home page. */

const products = [
  {
    id: 1,
    name: 'Dien Thoai Iphone 4',
    price: 2000000,
  },
  {
    id: 2,
    name: 'May tinh bang',
    price: 4000000,
  }
]
const users = [
  'TuanAnh',
  'PhuongNam',
  'HoangLong'
]
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello Mindx', users: users, newProducts: products });
});

module.exports = router;
