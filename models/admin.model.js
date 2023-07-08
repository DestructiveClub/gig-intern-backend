const mongoose = require("mongoose")
const user = require("./user.model")

module.exports = user.discriminator("admin",
    new mongoose.Schema({

    })
)