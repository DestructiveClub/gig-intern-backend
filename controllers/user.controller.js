const User = require("../models/intern.model.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      otherNames: req.body.otherNames,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      bio: req.body.bio,
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
  } catch (err) {
    console.log(err);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(404).json({ message: "Email does not exist" });
    }
    const password = bcrypt.compareSync(req.body.password, user.password);
    if (!password) {
      res.status(400).json({
        message: "Wrong Password!",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT
    );
    res
      .status(200)
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .json({ message: "login successful", user: user });
  } catch (err) {
    console.log(err.message);
  }
};

const logout = async (req, res) => {
  res.clearCookie("accessToken", {
    sameSite: "none",
    secure: true,
  }).status(200).json({message: "User has been logged out successfully"});
};

module.exports = {
  login,
  register,
  logout,
};
