import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import authRoutes from "./routes/auth.js";
import courseRoutes from "./routes/courses.js";
import reviewRoutes from "./routes/reviews.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/reviews", reviewRoutes);

const port = process.env.PORT || 5000;
connectDB().then(() =>
  app.listen(port, () => console.log(`🚀 API running on http://localhost:${port}`))
);
