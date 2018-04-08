var logger = require('morgan');
var bodyParser = require('body-parser');
var express = require('express');
const cors = require('cors');

var indexRouter = require('./routes/home');
const happystory = require('./routes/happystory');
const sadstory = require('./routes/sadstory');
const path = require('path');

// console.log(indexRouter);

const PORT = 8000;

var app = express();

var createError = require('http-errors');

// var path = require('path');
var favicon = require('serve-favicon');

var cookieParser = require('cookie-parser');

const knex = require('./db');
var dotenv = require('dotenv').config();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Setup Middleware
//
app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
app.use(logger('combined'));
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());

// Add routes

app.use('/', indexRouter);
app.use('/happystory', happystory);
app.use('/sadstory', sadstory);

// app.use('api/stories/happy_story/:id', happy_story);
// app.use('api/stories/sad_story/:id/', sad_story);

console.log("the path is " + __dirname);

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

app.listen(PORT, () => {
  console.log('Server listening on ', PORT);
});
