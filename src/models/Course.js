import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, 
  title: { type: String, required: true },
  instructor: { type: String, required: true },
  platform: { type: String, required: true },
  rating: { type: Number, required: true, min: 0, max: 5 },
  reviewCount: { type: Number, default: 0 },
  duration: { type: String }, 
  studentCount: { type: Number, default: 0 },
  price: { type: String, required: true },
  originalPrice: { type: String },
  thumbnail: { type: String, required: true }, 
  category: { type: String, required: true }, 
  level: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced"], 
    required: true
  }
}, { timestamps: true }); 

export default mongoose.model("Course", courseSchema);
