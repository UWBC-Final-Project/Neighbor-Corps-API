const router = require("express").Router();

const userRoutes = require("./users");
const taskRoutes = require("./tasks");
const commentRoutes = require("./comments");
const authRoutes = require("./auth");

router.use("/users", userRoutes);
router.use("/tasks", taskRoutes);
router.use("/comments", commentRoutes);
router.use("/auth", authRoutes);

module.exports = router;
