const express = require("express");
const router = express.Router();
const { register } = require("../controllers/user.controller.js");
const { login } = require("../controllers/user.controller.js");
const { logout } = require("../controllers/user.controller.js");

//import controller functions to use routes.

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);

// router.po

module.exports = router;
