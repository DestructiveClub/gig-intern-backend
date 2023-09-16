const mongoose = require("mongoose");

const user = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
  },
  otherNames: [String],
  phoneNumber: {
    type: Number,
    unique: [true, "phone number must be unique"],
  },
  email: {
    type: String,
    unique: [true, "email must be unique"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  bio: {
    type: String,
  },
});

class UserClass {
  get FullName() {
    const result = this.firstName;

    for (let name of this.otherNames) {
      result = result + " " + name;
    }

    if (!this.lastName) return result;

    return result + " " + this.lastName;
  }
}

module.exports = {
  user,
  UserClass,
};
