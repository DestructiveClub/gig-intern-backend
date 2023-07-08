// const mongoose = require("mongoose")

// const course = new mongoose.Schema({
//     title: {
//         type: String,
//         required: [true, "provide a title to the course"]
//     },
//     description: {
//         type: String,
//     },
//     category: ["Engineering", "Science",],
//     facilitator: {
//         type: mongoose.SchemaTypes.ObjectId,
//         ref: "admin"
//     },
//     likes: [{
//         type: mongoose.SchemaType.ObjectId,
//         ref: ["intern", "admin"]
//     }]
// })

// module.exports = mongoose.model("course", course)