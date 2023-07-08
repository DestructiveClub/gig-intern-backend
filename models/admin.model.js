const mongoose = require("mongoose")
const user = require("./user.model")

const admin = new mongoose.Schema({

})

module.exports = mongoose.model("admin", admin)