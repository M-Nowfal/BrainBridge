import { Document, Types } from "mongoose";

export interface OTPDocument extends Document {
  email: string;
  otp: number;
  createdAt: Date;
}