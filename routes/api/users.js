const authUtils = require('../../client/src/utils/authMethods');
const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

// Matches with "api/users/find/currentUser"
// Note-to-self: added /abc/def instead of /abc only, as abc can be confused with the :id due the above API call
router
  .route("/find/currentUser")
  .get(authUtils.validateLogin, usersController.findCurrentUser);

module.exports = router;
