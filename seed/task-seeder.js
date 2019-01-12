const Task = require('../models/task');

const mongoose = require('mongoose');

mongoose.connect("mongodb://27017/neighborCorps");

const tasks = [
  new Task({
    createdBy: "Kevin",
  }),
  new Task({
    createdBy: "Hy",
  }),
  new Task({
    createdBy: "Jia",
  }),
];

async function seedAndDisconnect(data) {
  data.forEach(i => i.save())
}

seedAndDisconnect(tasks).then(mongoose.disconnect());