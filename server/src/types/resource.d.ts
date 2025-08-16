import { Document, Types } from "mongoose";

export interface ResourceDocument extends Document {
  title: string;
  description?: string;
  fileUrl: string;
  fileType: "pdf" | "image" | "video" | "link";
  uploadedBy: Types.ObjectId;
  courseId: Types.ObjectId;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}
