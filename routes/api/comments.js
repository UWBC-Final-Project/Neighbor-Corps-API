const router = require("express").Router();
const authUtils = require('../../utils/authMethods');
const commentsController = require("../../controllers/commentsController");

// Matches with "/api/comments"
router.route("/")
  .get(commentsController.findAll)
  .post(authUtils.validateLogin, commentsController.create);

// Matches with "/api/comments/currentUser"
router.route("/currentUser")
  .get(authUtils.validateLogin, commentsController.findAllForUser);

// Matches with "/api/comments/:id"
router
  .route("/:id")
  .get(commentsController.findById)
  .put(authUtils.validateLogin, commentsController.update)
  .delete(authUtils.validateLogin, commentsController.remove);

// Matches with "/api/comments/task"
router
  .route("/task/:id")
  .get(commentsController.find)

module.exports = router;
