const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  address: { type: String },
  meritscore: { type: Number }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
