import { Types } from "mongoose";

export interface Lesson {
  title: string;
  contentType: "video" | "pdf" | "image" | "quiz";
  contentUrl?: string;
  duration?: number;
  transcript?: string;
  quizId?: Types.ObjectId;
}

export interface Section {
  title: string;
  lessons: Lesson[];
}

export interface Review {
  userId: Types.ObjectId;
  rating: number;
  comment?: string;
  date: Date;
}

export interface CourseDocument {
  title: string;
  slug: string;
  description: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  thumbnail: string;
  videoPreview: string;
  instructor: Types.ObjectId;

  sections: Section[];
  resources: Types.ObjectId[];

  enrolledStudents: Types.ObjectId[];
  completionCount: number;
  reviews: Review[];
  averageRating: number;

  price: number;
  discount: number;
  isPublished: boolean;

  tags: string[];
  prerequisites: string[];

  certificate: String;
}
