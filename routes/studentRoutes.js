const express = require('express')
const router = express.Router()

//import controller functions to use routes.

router.route('/register').post(() => {
    console.log('registering user')
})

module.exports = router