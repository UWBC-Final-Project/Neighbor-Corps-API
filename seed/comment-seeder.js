const Comment = require('../models/comment');

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/neighborCorps");

const comments = [
  new Comment({
    createdby: '',
    createdby: '',
  }),
  new Comment({
    createdby: '',
    createdby: '',
  }),
  new Comment({
    createdby: '',
    createdby: '',
  }),
];

comments.forEach(c => c.save());