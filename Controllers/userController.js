//  1. import userSchema or model
const users = require("../Models/userSchema");
const jwt = require("jsonwebtoken");

// Register logic
exports.register = async (req, res) => {
  console.log("inside register method");
  // accepts the data from client
  const { username, email, password } = req.body;
  console.log(username, email, password);
  try {
    // check if email already exists
    const existingUser = await users.findOne({ email });
    console.log(existingUser);
    if (existingUser) {
      res.status(406).json("User Already Exists");
    } else {
      const newUser = new users({
        username,
        email,
        password,
        github: "",
        livelink: "",
        profile: "",
      });
      await newUser.save();
      res.status(200).json(newUser);
    }
  } catch (err) {
    res.status(500).json("Register Failed");
  }
};
// Login logic
exports.login = async (req, res) => {
  // accepts data from client
  const { email, password } = req.body;
  try {
    // check if email and pwsd exists
    const existingUser = await users.findOne({ email, password });
    if (existingUser) {
      const token = jwt.sign({ userId: existingUser._id }, "super2024");
      console.log(token);
      res.status(200).json({existingUser,token});
    } else {
      res.status(400).json("Invalid email or password");
    }
  } catch (err) {
    res.status(500).json("Login Failed" + err);
  }
};


