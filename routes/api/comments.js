const router = require("express").Router();
const commentsController = require("../../controllers/commentsController");

// Matches with "/api/comments"
router.route("/")
  .get(commentsController.findAll)
  .post(commentsController.create);

// Matches with "/api/comments/:id"
router
  .route("/:id")
  .get(commentsController.findById)
  .put(commentsController.update)
  .delete(commentsController.remove);

// Matches with "/api/comments/task"
router
  .route("/task/:id")
  .get(commentsController.find)

module.exports = router;
