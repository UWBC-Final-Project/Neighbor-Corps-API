const User = require('../models/user');

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/neighborCorps");

const users = [
  new User({
    name: "Pushpinder"
  }),
  new User({
    name: "Scott"
  }),
  new User({
    name: "Hy"
  })
];



async function seedAndDisconnect(data) {
  data.forEach(i => i.save())
}

seedAndDisconnect(users).then(mongoose.disconnect());