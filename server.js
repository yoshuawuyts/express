// server.js
'use strict';

// declare variables
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 1337;
var mongoose = require('mongoose');
var passport = require('passport');
var flash	   = require('connect-flash'); 

var configDB = require('./config/database.js');

// middleware
mongoose.connect(configDB.url);					// mongoose
require('./config/passport')(passport); // passport

app.configure(function() {

	// set up express
	app.use(express.logger('dev')); 	// log every request to the console
	app.use(express.cookieParser());	// read cookies
	app.use(express.bodyParser());  	// get information from html forms

  // set up views
  app.set('views', __dirname + '/assets/views');
	app.set('view engine', 'jade');

	// required for passport
	app.use(express.session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
	app.use(passport.initialize());
	app.use(passport.session());	// persistent login sessions
	app.use(flash());           	// use connect-flash for flash messages stored in session

});

// load our router
require('./api/routes.js')(app, passport);

// launch
app.listen(port);
console.log('Listening on port ' + port);