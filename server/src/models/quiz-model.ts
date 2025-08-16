import { QuizDocument } from "@/types/quiz";
import mongoose, { Schema } from "mongoose";

// -------------------- Schema --------------------
const quizSchema: Schema<QuizDocument> = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, default: "" },
  courseId: { type: Schema.Types.ObjectId, ref: "Course", required: true },
  duration: { type: Number, default: 3 },
  passingScore: { type: Number, default: 50 },
  isPublished: { type: Boolean, default: false },

  questions: [{
    questionText: { type: String, required: true },
    questionType: { type: String, enum: ["multiple-choice", "true-false", "short-answer"], required: true },
    options: [{ type: String }],
    correctAnswer: { type: String, required: true },
    marks: { type: Number, default: 1 }
  }],

  attempts: [{
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    score: { type: Number },
    percentage: { type: Number },
    date: { type: Date, default: Date.now }
  }],

  tags: [{ type: String }],
}, { timestamps: true });

// -------------------- Model --------------------
const Quiz = mongoose.models.Quiz || mongoose.model<QuizDocument>("Quiz", quizSchema);
export default Quiz;
