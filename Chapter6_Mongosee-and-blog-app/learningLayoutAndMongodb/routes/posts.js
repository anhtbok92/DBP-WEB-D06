const express = require('express');
const router = express.Router();
const BlogPost = require('../models/BlogPost');

router.get('/new', function (req, res) {
   res.render('create');
});

router.post('/store', (req, res) => {
   // luu title, content, image to database
   console.log('req.body-', req.body);
   BlogPost.create({
      ...req.body,
      image: 'abcdef.jpg'
   }, function (err) {
      res.redirect('/');
   });
});

module.exports = router;