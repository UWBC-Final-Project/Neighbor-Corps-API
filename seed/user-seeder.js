const User = require('../models/user');

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/neighborCorps");

const users = [
  new User({
    createdby: '',
    createdby: '',
  }),
  new User({
    createdby: '',
    
  })
];

users.forEach(u => u.save());

