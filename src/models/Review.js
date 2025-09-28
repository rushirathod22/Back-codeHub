import express from "express";
const router = express.Router();

// health check route
router.get("/ping", (req, res) => {
  res.json({ msg: "reviews route is working" });
});

export default router;

