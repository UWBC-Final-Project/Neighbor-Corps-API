const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: {type: String},
  imageURL: {type: String},
  position: { type: Array }, // save what we grasp from Google map pinned location
  tags:[{type: String}],
  postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  // comments: [{type: mongoose.Schema.Types.ObjectId, ref: "Comment"}],
  postDate: { type: Date, default: Date.now }, 
  lastUpdated: { type: Date },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

// Custom method `lastUpdatedDate`
taskSchema.methods.lastUpdatedDate = function() {
  // Set post's `lastUpdated` property to the current date/time
  this.lastUpdated = Date.now();
  // Return this new date
  return this.lastUpdated;
};


const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
