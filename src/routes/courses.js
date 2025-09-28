import express from "express";
import Course from "../models/Course.js";
import { authRequired } from "../middleware/authMiddleware.js";

const router = express.Router();

// list/search
router.get("/", async (req, res) => {
  const { q } = req.query;
  const query = q ? { title: { $regex: q, $options: "i" } } : {};
  const courses = await Course.find(query);
  res.json(courses);
});

// get all courses
router.get("/allcourses", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// recommendation (simple: match user interests to course category)
router.get("/recommend", authRequired, async (req, res) => {
  const interests = req.user.interests || [];
  const recs = await Course.find({ category: { $in: interests } }).sort({ avgRating: -1 }).limit(10);
  res.json(recs);
});

export default router;
