const Comment = require('../models/comment');

const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/neighborCorps"
);

const comments = [
  new Comment({
    createdBy: "Hy",
  }),
  new Comment({
    createdBy: "Jia",
  }),
  new Comment({
    createdBy: "Kevin",
  }),
];

async function seedAndDisconnect(data) {
  data.forEach(i => i.save())
}

seedAndDisconnect(comments).then(mongoose.disconnect());