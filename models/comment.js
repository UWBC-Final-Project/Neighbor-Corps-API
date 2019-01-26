const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  description: {type: String, required: true},
  // Cannot use unique true username because a user can have more than one comment
  // username: { type: String, required: true },
  tags:[{type: String}],
  // use postedBy ref: 'User' to return a user object when .populate
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  postDate: { type: Date, default: Date.now }
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
