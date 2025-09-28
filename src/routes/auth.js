import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, password, interests } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hashed, interests });
  await user.save();
  res.json({
    msg: "User created",
    success: true
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ msg: "User not found" });
  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ msg: "Invalid credentials" });
  const token = jwt.sign({ id: user._id, interests: user.interests }, process.env.JWT_SECRET, { expiresIn: "7d" });
  res.json({ token, user: { name: user.name, email: user.email } });
});

export default router;
