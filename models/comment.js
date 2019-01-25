const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  comment: { type: String, required: true },
  belongsToTask: { type: String, required: true },
  username: { type: String },
  tags:[{type: String}],
  // postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  postDate: { type: Date, default: Date.now }
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
