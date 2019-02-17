const router = require("express").Router();
const authUtils = require('../../utils/authMethods');
const tasksController = require("../../controllers/tasksController");

// Matches with "/api/tasks/"
router.route("/")
  .get(tasksController.findAll)
  .post(authUtils.validateLogin, tasksController.create);

// Matches with "/api/tasks/currentUser
router.route("/currentUser")
  .get(authUtils.validateLogin, tasksController.findAllForUser);

// Matches with "/api/tasks/:id"
router
  .route("/:id")
  .get(tasksController.findById)
  .put(authUtils.validateLogin, tasksController.update)
  .delete(authUtils.validateLogin, tasksController.remove);

module.exports = router;
