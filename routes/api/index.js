const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/books", bookRoutes);
router.use("/users", userRoutes);
router.use("/tasks", taskRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
