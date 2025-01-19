const mongoose = require("mongoose");
const validator = require('validator')

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email address.",
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);