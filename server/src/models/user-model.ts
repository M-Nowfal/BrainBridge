import mongoose, { Schema } from "mongoose";
import { UserDocument } from "../types/user";

// -------------------- Schema --------------------
const userSchema: Schema<UserDocument> = new mongoose.Schema({
  name: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true, unique: true },
  phone: { type: String, trim: true, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String, default: "" },
  role: { type: String, enum: ["student", "instructor", "admin"], default: "student" },

  enrolledCourses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
  completedCourses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
  progress: [{
    courseId: { type: Schema.Types.ObjectId, ref: "Course" },
    percentage: { type: Number, default: 0 }
  }],
  quizzesTaken: [{
    quizId: { type: Schema.Types.ObjectId, ref: "Quiz" },
    score: { type: Number },
    date: { type: Date, default: Date.now }
  }],
  certificates: [{
    courseId: { type: Schema.Types.ObjectId, ref: "Course" },
    url: { type: String },
    dateIssued: { type: Date, default: Date.now }
  }],
  bookmarks: [{
    itemId: { type: Schema.Types.ObjectId, refPath: "bookmarks.itemType" },
    itemType: { type: String, enum: ["Course", "Resource", "Quiz"], required: true }
  }],
  notifications: [{
    message: { type: String },
    read: { type: Boolean, default: false },
    date: { type: Date, default: Date.now }
  }],
  themePreference: { type: String, enum: ["light", "dark"], default: "light" },
  isVerified: { type: Boolean, default: false },
  status: { type: String, enum: ["active", "inactive", "banned"], default: "active" },
  lastLogin: { type: Date },
  activityLog: [{
    action: { type: String },
    date: { type: Date, default: Date.now }
  }]
}, { timestamps: true });

// -------------------- Model --------------------
const User = mongoose.models.User || mongoose.model<UserDocument>("User", userSchema);
export default User;
