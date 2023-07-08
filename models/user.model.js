const mongoose = require("mongoose")

const intern = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"]
    },
    lastName: {
        type: String,
    },
    bio: {
        type: String,
    },
    otherNames: [String],
    phoneNumber: {
        type: String,
    },
    email: {
        type: String,
    },
    level: {
        type: Number,
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    coureses: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "course"
    }],
})