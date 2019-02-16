const authUtils = require('../../client/src/utils/authMethods');
const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById);

// Matches with "api/users/find/currentUser"
// Note-to-self: added /abc/def instead of /abc only, as abc can be confused with the :id due the above API call
router
  .route("/find/currentUser")
  .get(authUtils.validateLogin, usersController.findCurrentUser)
    // User needs to be logged in before updating or removing account
  .put(authUtils.validateLogin, usersController.update)
  .delete(authUtils.validateLogin, usersController.remove);

module.exports = router;
