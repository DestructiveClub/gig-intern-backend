const mongoose = require("mongoose")
const user = require("./user.model")

module.exports = user.discriminator("intern",
    new mongoose.Schema({
        dob: {
            type: Date,
            required: [true, "provide date of birth"]
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
)