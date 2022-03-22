const express = require('express');
const path = require('path');
const router = express.Router();
const BlogPost = require('../models/BlogPost');

router.get('/new', function (req, res) {
   res.render('create');
});

router.post('/store', (req, res) => {
   // luu title, content, image to database
   let image = req.files.image;
   image.mv(path.resolve(__dirname, image.name), function (error) {
      console.log('error-uploadImage', error);
      BlogPost.create({
         ...req.body,
         image: '/upload/' + image.name
      }, function (err) {
         res.redirect('/');
      });
   })
});

module.exports = router;