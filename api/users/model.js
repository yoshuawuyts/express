// api/users/model.js
'uses strict';

// load dependencies
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

// define schema
var userSchema = mongoose.Schema({

  local: {
    email: String,
    password: String,
  },

  facebook: {
    id: String,
    token: String,
    email: String,
    name: String,
  }
});

// validate password
userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.local.password);
};

// hash & set password
userSchema.methods.hashPassword = function (password) {
  var user = this;

  // hash password
  bcrypt.hash(password, null, null, function (err, hash) {
    if (err) {
      return next(err);
    }

    user.local.password = hash;
  });

};

// create user model & expose to app
module.exports = mongoose.model('User', userSchema);
