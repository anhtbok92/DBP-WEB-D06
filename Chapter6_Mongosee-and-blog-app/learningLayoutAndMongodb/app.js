var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

// connect database
const db = 'mongodb://localhost/blog-dbp-06';
mongoose.connect(db);

var indexRouter = require('./routes/index');
var postsRouter = require('./routes/posts');
// var usersRouter = require('./routes/users');
// var authRouter = require('./routes/auth');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// trang home
// Get thong tin cac bai post
app.use('/', indexRouter);

// trang posts
// Tao moi 1 bai post
app.use('/posts', postsRouter);

// trang user
// Dang ky moi 1 user
// app.use('/users', usersRouter);

// trang login
// app.use('/auth', authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
