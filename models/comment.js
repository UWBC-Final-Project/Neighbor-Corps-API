const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  comment: { type: String, required: true },
  belongsToTask: { type: String, required: true },
  tags:[{type: String}],

  // username: { type: String}
  // We don't need to use 'username', as 'postedBy' when used with .populate can return user's object with all user's properties
  // .populate is used in commentController
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  postDate: { type: Date, default: Date.now }
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
