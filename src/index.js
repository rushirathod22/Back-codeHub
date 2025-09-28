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

// Root route for Vercel
app.get("/", (req, res) => {
  res.json({ 
    message: "Backend API is running!",
    endpoints: {
      auth: "/api/auth",
      courses: "/api/courses", 
      reviews: "/api/reviews"
    }
  });
});

const port = process.env.PORT || 5000;

// Connect and start server locally
if (process.env.NODE_ENV !== 'production') {
  connectDB().then(() =>
    app.listen(port, () => console.log(`🚀 API running on http://localhost:${port}`))
  );
}

// Export for Vercel
export default app;