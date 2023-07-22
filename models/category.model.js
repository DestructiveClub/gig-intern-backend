const mongoose = require("mongoose")

const category = new mongoose.Schema({
    name: {
        type: String,
        unique: [true, "a category should have a unique name"]
    }
})