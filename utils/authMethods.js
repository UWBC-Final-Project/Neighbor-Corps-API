// This can be used for any future reference to user
// Eg. Tasks related to user; user needs to log in to see tasks
module.exports = {
  validateLogin: function(req, res, next) {
    if(!req.user) {
      res.json({ error: "User is not logged in" });
    }
    else {
      next();
    }
  }
};