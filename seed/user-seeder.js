const User = require('../models/user');

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/neighborCorps");

const users = [
  new User({
    username: "UserNumberOne",
    password: "PasswordOne",
    email: "User@user.com",
    phone: "773-555-6059",
    address: "4122 Main St., Anytown, WA 99999",
    meritscore: 150
  }),
  new User({
    username: "UserNumberTwo",
    password: "PasswordTwo",
    email: "User2@user.com",
    phone: "773-555-4498",
    address: "122 South St., Anytown, WA 99999",
    meritscore: 65
  }),
  new User({
    username: "UserNumberThree",
    password: "PasswordThree",
    email: "User3@user.com",
    phone: "773-555-5567",
    address: "55 Doug Rd., Anytown, WA 99999",
    meritscore: 325
  })
];



async function seedAndDisconnect(data) {
  data.forEach(i => i.save())
}

seedAndDisconnect(users).then(mongoose.disconnect());