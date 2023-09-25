const express = require("express");
const router = express.Router();
const CustomerInfo = require("../models/customer");
const bcrypt = require("bcrypt"); // Needed to hashed password.

// ! Signup a new user or customer
router.post("/signup", async (req, res) => {
  const { fName, lName, email, password } = req.body;

  const existingUser = await CustomerInfo.findOne({ email });
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "There's already an account with this email." });
  }

  if (password.length < 8) {
    return res
      .status(400)
      .json({ message: "Password must be at least 8 characters long." });
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const user = new CustomerInfo({
    fName: fName,
    lName: lName,
    email: email,
    password: hashedPassword,
  });
  try {
    const newUser = await user.save();
    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        fName: newUser.fName,
        lName: newUser.lName,
        email: newUser.email,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Failed to register the user." });
  }
});

module.exports = router;
