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

  // process the signup form
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile', // redirect to the secure profile section
    failureRedirect: '/signup', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  }));

  // process the login form
  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/profile', // redirect to the secure profile section
    failureRedirect: '/login', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  }));
};

// route middleware to assure user is logged in
function isLoggedIn(req, res, next) {
  // check if logged in
  if (req.isAuthenticated()) {
    return next();
  }

  // else redirect
  res.redirect('/');
}
