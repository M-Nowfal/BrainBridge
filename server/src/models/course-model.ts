import mongoose, { Schema } from "mongoose";
import { CourseDocument } from "../types/course";

// -------------------- Schema --------------------
const courseSchema: Schema<CourseDocument> = new mongoose.Schema({
  title: { type: String, trim: true, required: true },
  slug: { type: String, unique: true, lowercase: true, trim: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  level: { type: String, enum: ["Beginner", "Intermediate", "Advanced"], default: "Beginner" },
  thumbnail: { type: String, default: "" },
  videoPreview: { type: String, default: "" },
  instructor: { type: Schema.Types.ObjectId, ref: "User", required: true },

  sections: [{
    title: { type: String, required: true },
    lessons: [{
      title: { type: String, required: true },
      contentType: { type: String, enum: ["video", "pdf", "image", "quiz"], required: true },
      contentUrl: { type: String },
      duration: { type: Number, default: 0 },
      transcript: { type: String },
      quizId: { type: Schema.Types.ObjectId, ref: "Quiz" }
    }]
  }],
  resources: [{ type: Schema.Types.ObjectId, ref: "Resource" }],

  enrolledStudents: [{ type: Schema.Types.ObjectId, ref: "User" }],
  completionCount: { type: Number, default: 0 },
  reviews: [{
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    rating: { type: Number, min: 1, max: 5 },
    comment: { type: String },
    date: { type: Date, default: Date.now }
  }],
  averageRating: { type: Number, default: 0 },

  price: { type: Number, default: 0 },
  discount: { type: Number, default: 0 },
  isPublished: { type: Boolean, default: false },

  tags: [{ type: String }],
  prerequisites: [{ type: String }],

  certificate: { type: String }
}, { timestamps: true });

// -------------------- Pre-save Hook --------------------
courseSchema.pre<CourseDocument>("save", function (next) {
  if (this.reviews.length > 0) {
    const avg = this.reviews.reduce((acc, r) => acc + r.rating, 0) / this.reviews.length;
    this.averageRating = parseFloat(avg.toFixed(1));
  } else {
    this.averageRating = 0;
  }
  next();
});

// -------------------- Model --------------------
const Course = mongoose.models.Course || mongoose.model<CourseDocument>("Course", courseSchema);
export default Course;
