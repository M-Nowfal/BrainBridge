import { Document, Types } from "mongoose";

export interface Question {
  questionText: string;
  questionType: "multiple-choice" | "true-false" | "short-answer";
  options?: string[];
  correctAnswer: string;
  marks: number;
}

export interface Attempt {
  userId: Types.ObjectId;
  score: number;
  percentage: number;
  date: Date;
}

export interface QuizDocument extends Document {
  title: string;
  description?: string;
  courseId: Types.ObjectId;
  duration: number;
  passingScore: number;
  isPublished: boolean;

  questions: Question[];
  attempts: Attempt[];

  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}