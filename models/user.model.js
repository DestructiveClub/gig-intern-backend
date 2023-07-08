const mongoose = require("mongoose");

const intern = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
  },
  lastName: {
    type: String,
  },
  otherNames: [String],
  dob: {
    type: Date,
    // required: [true, "provide date of birth"],
  },
  bio: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  // skills: [{
  //     type: mongoose.SchemaTypes.ObjectId,
  //     ref: "skill"
  // }],
  // coureses: [{
  //     type: mongoose.SchemaTypes.ObjectId,
  //     ref: "course"
  // }],
  level: {
    type: Number,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
});

intern.virtual("fullName").get(function () {
  let fullname = this.firstName;

  if (this.otherNames.length !== 0)
    fullname = fullname + " " + this.otherNames.join(" ");

  if (this.lastName) fullname = fullname + " " + this.lastName;

  return fullname;
});

module.exports = mongoose.model("intern", intern);
