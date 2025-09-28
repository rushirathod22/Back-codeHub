import express from "express";
import Review from "../models/Review.js";
import Course from "../models/Course.js";
import { authRequired } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/:courseId", authRequired, async (req, res) => {
  const { rating, comment } = req.body;
  const review = new Review({
    courseId: req.params.courseId,
    userId: req.user.id,
    rating,
    comment
  });
  await review.save();

  // Update avg rating
  const stats = await Review.aggregate([
    { $match: { courseId: review.courseId } },
    { $group: { _id: null, avg: { $avg: "$rating" } } }
  ]);
  await Course.findByIdAndUpdate(review.courseId, { avgRating: stats[0].avg });

  res.json({ msg: "Review added" });
});

router.get("/:courseId", async (req, res) => {
  const reviews = await Review.find({ courseId: req.params.courseId }).populate("userId", "name");
  res.json(reviews);
});

export default router;
