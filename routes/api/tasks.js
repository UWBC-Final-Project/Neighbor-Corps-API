const router = require("express").Router();
const tasksController = require("../../controllers/tasksController");

// Matches with "/api/tasks"
router.route("/")
  .get(tasksController.findAll)
  .post(tasksController.create);

// Matches with "/api/tasks/:id"
router
  .route("/:id")
  .get(tasksController.findById)
  .get(tasksController.findAllTasks)
  .put(tasksController.update)
  .delete(tasksController.remove)
  .post(tasksController.createComments);

module.exports = router;
