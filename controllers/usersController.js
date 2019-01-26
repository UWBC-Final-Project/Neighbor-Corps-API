const db = require("../models");
const bcrypt = require("bcryptjs");

// Defining methods for the usersController
module.exports = {
  // ---> KPH Adding in from boilerplate
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log("toot");
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // <---- KPH added from boilerplate

  // ====== FIND CURRENT USER: current session logged in by the user ======
  findCurrentUser: function(req, res ) {
    db.User
      .findById(req.user._id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  // ====== FIND USER: Find the unique username from the database ======
  findOneByUsername: function( user, callback ) {
    db.User
      .findOne({ username: user })
      .then(dbModel => callback(null, dbModel))
      .catch(err => callback(err, null));
  },

  // ====== SIGN-UP ======
  signUp: function(body, callback) {
    //copy the body to the user
    const user = Object.assign({}, body)

    db.User
      // Find username from the database
      .findOne({ username: user.username })
      .then((dbModel) => {
        // If username exists in database
        if(dbModel){
          // Prompt user to choose another username
          callback( null, null, { msg: "Username already exists" } );
        } else {
          let salt = bcrypt.genSaltSync(7);

          user.password = bcrypt.hashSync(user.password, salt)

          // Else username has not been used
          // Create new username and password
          db.User.create(user)
          .then(dbModel => { 
            callback(null, dbModel.username);
          }).catch(err => callback(err, null));
        }
      })
      .catch(err => callback(err, null));
  },

  // ====== SIGN-IN ====== 
  signIn: function(body, callback) {
    const { user, password } = body;
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

  // ====== UPDATE CURRENT USER'S ACCOUNT ====== 
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.user._id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // ====== REMOVE CURRENT USER'S ACCOUNT ====== 
  remove: function(req, res) {
    db.User
      .findOneAndDelete({ _id: req.user._id })
      .then(() => {
        req.session.destroy(() => {
          res.json({ user: req.user, message: "deleted account and logged out "} );
        });
      })
      .catch(err => res.status(422).json(err));
  }
};