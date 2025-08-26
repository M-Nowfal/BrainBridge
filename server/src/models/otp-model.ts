import { Schema, model, models } from "mongoose";
import { OTPDocument } from "../types/otp";

// -------------------- Schema --------------------
const otpSchema = new Schema<OTPDocument>({
  email: { type: String, required: true },
  otp: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now, expires: 300 }
});

// -------------------- Model --------------------
const OTPModel = models.OTP || model<OTPDocument>("OTP", otpSchema);
export default OTPModel;