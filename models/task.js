const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  completed: { type: Boolean, default: false },
  imageURL: { type: String },
  afterImageURL: { type: String },
  position: { type: Array }, // save what we grasp from Google map pinned location
  tags: [{ type: String }],
  usersInvolved: [{ type: String }],
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  // comments: [{type: mongoose.Schema.Types.ObjectId, ref: "Comment"}],
  postDate: { type: Date, default: Date.now },
  dateCompleted: { type: Date },
  lastUpdated: { type: Date },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ],
  taskCompletion: {
    type: Boolean,
    default: false
  },
});

// Custom method `lastUpdatedDate`
taskSchema.methods.lastUpdatedDate = function () {
  // Set post's `lastUpdated` property to the current date/time
  this.lastUpdated = Date.now();
  // Return this new date
  return this.lastUpdated;
};


const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
