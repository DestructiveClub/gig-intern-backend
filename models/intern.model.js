const mongoose = require("mongoose")
const user = require("./user.model")

const intern = new mongoose.Schema({
    ...user.obj,
    dob: {
        type: Date,
    },
    bio: {
        type: String,
    },
    interests: ["Software Engineering", "Sales", "video", "photoshop"],
    coureses: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "course"
    }],
    level: {
        type: Number,
    },
    skills: [{
        name: ["Web Development", "Sales Marketing", "video Editing"],
        level: {
            type: Number,
        },
    }],
})

module.exports = mongoose.model("intern", intern)