const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const validator = require('validator');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: 5,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    // required: true,
    minlength: 5,
    trim: true,
    // unique: true,
    // validate: {
    //   validator: validator.isEmail,
    //   message: props => `${props.value} is not a valid email!`
    // }
  },
  phone: { type: String },
  address: { type: String },
  meritscore: { type: Number },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
