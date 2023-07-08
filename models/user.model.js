const mongoose = require("mongoose");

<<<<<<< HEAD
const user = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"]
    },
    lastName: {
        type: String,
    },
    otherNames: [String],
    dob: {
        type: Date,
        required: [true, "provide date of birth"]
    },
    bio: {
        type: String,
    },
    phoneNumber: {
        type: String,
        unique: [true, "email must be unique"]
    },
    email: {
        type: String,
        unique: [true, "email must be unique"]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
})

user.virtual("fullName").get(function () {
    let fullname = this.firstName
=======
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
>>>>>>> ca13b823cfcc17c91574c72bc97d2f55df79fe3f

  if (this.otherNames.length !== 0)
    fullname = fullname + " " + this.otherNames.join(" ");

  if (this.lastName) fullname = fullname + " " + this.lastName;

  return fullname;
});

<<<<<<< HEAD
module.exports = mongoose.model("user", user)
=======
module.exports = mongoose.model("intern", intern);
>>>>>>> ca13b823cfcc17c91574c72bc97d2f55df79fe3f
