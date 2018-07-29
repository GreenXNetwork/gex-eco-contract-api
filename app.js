var createError = require('http-errors');
var express = require('express');
var path = require('path');
//define modules if we need to use session or cookies
//var cookieParser = require('cookie-parser');
var logger = require('morgan');
var debug = require('debug')('my-express-app:app');

//initialize Web3 service to listen to blockchain events
require('./services/web3');

//init database service
require('./services/db');

var passport = require('./middlewares/passport');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup - although not used, but must be provided
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//logger helper to log requested routes to console
app.use(logger('dev'));

//parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());
//parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());

//no need for public path since we are not using View
//app.use(express.static(path.join(__dirname, 'public')));

//initialize passport middleware
app.use(passport.initialize());

/*TODO: define base routes here*/
app.use('/', indexRouter);
  //users route need to be authenticated by passportjs before going to sub-router in /routes/users.js
app.use('/users', passport.authenticate('bearer', {'session':false}), usersRouter);


/*-------------------------*/

//if no above routes are matched, catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  //debug('ERROR: '+ JSON.stringify(err));
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//expose app instance to /bin/www
module.exports = app;
