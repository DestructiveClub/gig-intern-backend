const mongoose = require("mongoose")
const {user, UserClass} = require("./user.model.js")

const admin = new mongoose.Schema({
    ...user.obj
})

admin.loadClass(UserClass)

module.exports = mongoose.model("admin", admin)