const { response } = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//register a user
const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    //check if user exists
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return res.status(400).json({
        success: false,
        msg: "User already exists",
      });
    }
    //hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //add the user to the database
    const newUser = new User({ email, hashedPassword });
    await newUser.save();
    res
      .status(200)
      .json({ success: true, msg: "User registered successfully" });
  } catch (error) {
    console.log("some error occurred: ", error);
    res.status(500).json({ success: false, msg: "Server error" });
  }
};

//login a user
//take email and password
const signInUser = async (req, res) => {
  try {
    console.log("Hit");
    const { email, password } = req.body;
    console.log(email, password);
    //check if user exists with email
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ success: false, msg: "User not found" });
    }
    //check if password matches
    const matchPassword = bcrypt.compare(password, user.hashedPassword);
    if (!matchPassword) {
      return res
        .status(400)
        .json({ success: false, msg: "Incorrect password" });
    }
      //generate token
      const token = jwt.sign({
        id: user._id,
        email: user.email,
      }, process.env.SECRET, { expiresIn: "24h"}); 

      //send the token to the client
      res.status(200).json({
        success: true,
        token: token,
        msg: "User logged in successfully",
      });
      
  } catch (error) {
    console.log("some error occurred: ", error);
    res.status(500).json({ success: false, msg: "Server error" });
  }
};
module.exports = { registerUser,signInUser };
