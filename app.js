const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const multer = require('multer'); // v1.0.5

const index = require('./routes/index');
const users = require('./routes/users');
const posts = require('./routes/posts')

const app = express();
const upload = multer();

mongoose.connect('mongodb://localhost/trimate',function(err,res){
  if(err) throw err
  console.log("CONNECT DB")
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
//app.use(express.multipart());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/users', users);
app.use('/posts', posts);

app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
