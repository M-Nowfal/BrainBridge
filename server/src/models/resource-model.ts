import { ResourceDocument } from "@/types/resource";
import mongoose, { Schema } from "mongoose";

// -------------------- Schema --------------------
const resourceSchema: Schema<ResourceDocument> = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, default: "" },
  fileUrl: { type: String, required: true },
  fileType: { type: String, enum: ["pdf", "image", "video", "link"], required: true },
  uploadedBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  courseId: { type: Schema.Types.ObjectId, ref: "Course", required: true },
  tags: [{ type: String }],
}, { timestamps: true });

// -------------------- Model --------------------
const Resource = mongoose.models.Resource || mongoose.model<ResourceDocument>("Resource", resourceSchema);
export default Resource;
