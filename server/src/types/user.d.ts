import { Document, Types } from "mongoose";

export interface Progress {
  courseId: Types.ObjectId;
  percentage: number;
}

export interface QuizTaken {
  quizId: Types.ObjectId;
  score?: number;
  date: Date;
}

export interface Certificate {
  courseId: Types.ObjectId;
  url: string;
  dateIssued: Date;
}

export interface Bookmark {
  itemId: Types.ObjectId;
  itemType: "Course" | "Resource" | "Quiz";
}

export interface Notification {
  message: string;
  read: boolean;
  date: Date;
}

export interface ActivityLog {
  action: string;
  date: Date;
}

export interface UserDocument extends Document {
  name: string;
  email: string;
  phone: string;
  password: string;
  avatar: string;
  role: "student" | "instructor" | "admin";

  enrolledCourses: Types.ObjectId[];
  completedCourses: Types.ObjectId[];
  progress: Progress[];
  quizzesTaken: QuizTaken[];
  certificates: Certificate[];
  bookmarks: Bookmark[];
  notifications: Notification[];
  themePreference: "light" | "dark";
  isVerified: boolean;
  status: "active" | "inactive" | "banned";
  lastLogin?: Date;
  activityLog: ActivityLog[];

  createdAt: Date;
  updatedAt: Date;
}