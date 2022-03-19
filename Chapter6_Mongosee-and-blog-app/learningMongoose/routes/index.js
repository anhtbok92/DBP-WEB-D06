var express = require('express');
var router = express.Router();
const CarModel = require('../model/car.model');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  console.log('car-model-', CarModel);
  res.send('api car working');
});

module.exports = router;
