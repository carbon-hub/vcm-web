import express from "express";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SECRET_PHRASE
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("Wrong user name");

    const savedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASSWORD_SECRET_PHRASE
    ).toString(CryptoJS.enc.Utf8);
    savedPassword !== req.body.password &&
      res.status(401).json("Wrong credentials");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET_PHRASE,
      { expiresIn: "3d" }
    );
    const { password, ...others } = user._doc;
    res.status(200).json({...others, accessToken});
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
