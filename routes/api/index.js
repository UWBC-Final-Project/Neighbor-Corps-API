const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require("./users");
const taskRoutes = require("./tasks");
const commentRoutes = require("./comments");
const authRoutes = require("./auth");

// Book routes
router.use("/books", bookRoutes);
router.use("/users", userRoutes);
router.use("/tasks", taskRoutes);
router.use("/comments", commentRoutes);
router.use("/auth", authRoutes);

module.exports = router;
