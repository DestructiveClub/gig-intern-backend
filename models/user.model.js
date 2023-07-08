const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"]
    },
    lastName: {
        type: String,
    },
    otherNames: [String],
    phoneNumber: {
        type: String,
        unique: [true, "phone number must be unique"]
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