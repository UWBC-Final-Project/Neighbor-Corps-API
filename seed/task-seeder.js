const Task = require('../models/task');

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/neighborCorps");

const tasks = [
  new Task({
    createdby: '',
    createdby: '',
  }),
  new Task({
    createdby: '',
    createdby: '',
  }),
  new Task({
    createdby: '',
    createdby: '',
  }),
];

async function seedAndDisconnect(data) {
  data.forEach(i => i.save())
}

seedAndDisconnect(tasks).then(mongoose.disconnect());