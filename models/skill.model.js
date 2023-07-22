const mongoose = require("mongoose")

const skill = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "a skill should have an name"],
        unique: [true, "the name of a skill should be unique, there's already a skill with this name"]
    },
    categories: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "category",
    }]
})