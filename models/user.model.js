const mongoose = require("mongoose");

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

module.exports = mongoose.model("user", user)