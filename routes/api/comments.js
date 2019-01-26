const router = require("express").Router();
const authUtils = require('../../client/src/utils/authMethods');
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

module.exports = router;
