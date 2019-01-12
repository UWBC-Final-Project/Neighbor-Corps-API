const db = require("../models");
const bcrypt = require("bcryptjs");

// Defining methods for the usersController
module.exports = {
  findOneByUsername: function( user, callback ) {
    db.User
      .findOne({ username: user })
      .then(dbModel => callback(null, dbModel.username))
      .catch(err => callback(err, null));
  },
  signUp: function(user, password, callback) {
    db.User
      .findOne({ username: user })
      .then((dbModel) => {
        if(dbModel){
          callback( null, null, { msg: "Username already exists" } );
        } else {
          let salt = bcrypt.genSaltSync(7);
          db.User.create({
            username: user,
            password: bcrypt.hashSync(password, salt)
          }).then(dbModel => { 
            callback(null, dbModel.username);
          }).catch(err => callback(err, null));
        }
      })
      .catch(err => callback(err, null));
  },
  signIn: function(password, user, callback) {
    db.User
      .findOne({ username: user })
      .then((dbModel) => {
        if(dbModel){
          if ( bcrypt.compareSync(password, dbModel.password) ){
            callback(null, dbModel.username);
          }
          else {
            callback(null, null, { msg: "Incorrect Password" });
          }
        }
        else { 
          callback(null, null, {msg: "User does not exist" });
        }
      })
      .catch(err => callback(err, null));
  },
  update: function(req, callback) {
    db.User
      .findOneAndUpdate({ username: req.user }, req.body)
      .then(dbModel => callback(null, dbModel))
      .catch(err => callback(err, null));
  },
  remove: function(userToDelete, callback) {
    db.User
      .findOneAndDelete({ username: userToDelete })
      .then(dbModel => callback(null, dbModel))
      .catch(err => callback(err, null));
  }
};