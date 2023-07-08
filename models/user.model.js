const mongoose = require("mongoose")

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

    if (this.otherNames.length !== 0) fullname = fullname + " " + this.otherNames.join(" ")

    if (this.lastName) fullname = fullname + " " + this.lastName

    return fullname
})

module.exports = mongoose.model("user", user)