// api/routes.js
'use strict';

module.exports = function (app, passport) {

  // home page
  app.get('/', function (req, res) {
    res.render('index');
  });

  // login
  app.get('/login', function (req, res) {

    // render page & pass flash data if exists
    res.render('login', {
      message: req.flash('loginMessage')
    });
  });

  // sign up
  app.get('/signup', function (req, res) {

    // render page & pass flash data if exists
    res.render('signup', {
      message: req.flash('signupMessage')
    });
  });

  // logout
  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });
};

// route middleware to assure user is logged in
function isLoggedIn(req, res, next) {
  // check if logged in
  if (req.isAuthenticated()) {
    return next();
  }

  // else redirect
  res.redicrect('/');
}
