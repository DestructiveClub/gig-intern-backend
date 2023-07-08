const User = require("../models/intern.model.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      otherNames: req.body.otherNames,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
    });

    const userExists = await User.findOne({ email: req.body.email });

    if (userExists) {
      return res.status(401).json({
        message: "User Already Exists",
      });
    }
    // jwt.sign();

    await newUser.save();
    res.status(200).json({
      user: newUser,
      message: "User has been registered successfully",
    });
    // res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};

const login = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
};

const logout = async (req, res) => {
  res.status(200).json({
    message: "This is the logout controller",
  });
};

module.exports = {
  login,
  register,
  logout,
};
