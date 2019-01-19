const router = require("express").Router();
var passport = require('passport');

router.get("/test", (req, res) => {
  res.json({user: req.user, message: (req.user) ? "User session active" : "no session active"})
})

// Passport Documentation: http://www.passportjs.org/docs/authenticate/
router.post("/login", passport.authenticate('login', {
  // successRedirect: "/",
  // successMessage: true,
  // failureRedirect: "/login",
  // failureMessage: true
}),
(req, res) => res.json({user: req.user, message:"logged in"}));

//insert google router here

router.post("/signup", passport.authenticate('signup'), 
  // successRedirect: "/",
  // successMessage: true,
  // failureRedirect: "/auth",
  // failureMessage: true
(req, res) => res.json({user: req.user, message:"signed up"}));

router.get("/logout", (req, res) => {
  req.session.destroy(res.json({ user: req.user, message:"logged out"} ));
})

module.exports = router;