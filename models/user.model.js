const db = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = db.Schema;

const userSchema = new db.Schema({
  role: {
    type: String,
    default: "user",
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = db.model("user", userSchema);
