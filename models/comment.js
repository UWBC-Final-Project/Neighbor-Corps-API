const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  createdBy: { type: String, required: true },
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  description: {type: String, required: true},
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
