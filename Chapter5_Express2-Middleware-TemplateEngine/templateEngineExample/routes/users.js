var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/', function (req, res, next) {
  const { body } = req;
  console.log('content-body', body);
  res.render('user', { body });
});

module.exports = router;
