const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require('validator');

const userSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  username: {
    type: String,
    required: true,
    minlength: 5,
    trim: true,
    // unique username
    unique: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    trim: true,
    // unique email
    unique: true,
    // validate email 
    validate: {
      validator: validator.isEmail,
      message: props => `${props.value} is not a valid email!`
    }
  },
  phone: { type: Number },
  aboutMe: { type: String },
  zipcode: { type: Number },
  terms: { type: Boolean},
  meritscore: { type: Number }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
