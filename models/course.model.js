const mongoose = require("mongoose")

const course = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "provide a title to the course"]
    },
    description: {
        type: String,
    },
    category: [[
        // "Software",
        // "Hardware",
        // "Design",
        // "Agriculture",
        "Engineering",
        "Science",
        "Business",
        "Arts",
        "Agriculture",
        // "Logistics",
        // "Management",
        // "Accounting",
        // "Finance",
        // "Banking",
        // "Investments",
        // "Human Resource Management",
        // "Communication",
    ]],
    facilitator: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "admin"
    },
    likes: [{
        type: mongoose.SchemaType.ObjectId,
        ref: "user"
    }]
})

module.exports = mongoose.model("course", course)