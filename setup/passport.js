const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const userController = require('../controllers/usersController');
const session = require('express-session');

module.exports = function(app) {
  app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized:true}));
  app.use(passport.initialize());
  app.use(passport.session());

  // used to serialize the user for the session
  // Start the session (login)
  passport.serializeUser(function(username, done) {
    // console.log('=== serialize ... called ===')
    // console.log(username) // the whole raw user object!
    // console.log('---------')
    done(null, username);
  });

  // used to deserialize the user from the session
  // Return the user whose session belonged to
  passport.deserializeUser(function(username, done) {
    // console.log('======= DESERILIZE USER CALLED ======')
    // console.log(username)
    // console.log('--------------')
    // Find the unique username
    // done callback function puts the user found in req.user
    userController.findOneByUsername(username, done)
  })

  // Route to login
  passport.use("login", new LocalStrategy({
      usernameField: 'username',
      passwordField: 'password'
    }, 
    function(username, password, done) {
      userController.signIn( {user: username, password: password}, 
        (error, username, message) => done(error, username, message));
    }
  ));

  // Route to signup
  // passport.use("signup", new LocalStrategy({
  //     usernameField: 'username',
  //     passwordField: 'password'
  //   }, 
  //   function(username, password, done) {
  //     userController.signUp( {user: username, password: password, email: email}, 
  //       (error, username, message) => done(error, username, message));
  //   }
  // ));

  //Google strategy here
}