import { Request, Response, NextFunction } from "express";
import OTPModel from "../models/otp-model";
import { generateOTP, sendOTPEmail } from "../services/otp.service";

// POST   /api/user/send-otp
export const sendOTP = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.body;
    const { action } = req.params;
    const storedOtp = await OTPModel.findOne({ email }).lean();
    const otp = generateOTP();
    await sendOTPEmail(email, otp, action);  // Send OTP to email
    if (!storedOtp) {
      await OTPModel.create({ email, otp });   // Store OTP in DB
    } else {
      await OTPModel.findOneAndUpdate({ email }, { $set: { otp } });
    }
    return res.status(200).json({ message: "OTP sent successfully." });
  } catch (err: unknown) {
    return next(err);
  }
};

// POST   /api/user/verify-otp
export const verifyOTP = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, otp } = req.body;
    const storedOtp = await OTPModel.findOne({ email }, { otp: 1, _id: 0 });
    if (!storedOtp || storedOtp.otp !== Number(otp)) {
      return res.status(400).json({ message: "Invalid or expired OTP." });
    }
    await OTPModel.findOneAndDelete({ email });
    return res.status(200).json({ message: "OTP verified successfully." });
  } catch (err: unknown) {
    return next(err);
  }
};

// POST   /api/user/register
export const registerUser = (req: Request, res: Response, next: NextFunction) => {
  try {

  } catch (err: unknown) {
    return next(err);
  }
};

// POST   /api/user/login
export const loginUser = (req: Request, res: Response, next: NextFunction) => {
  try {

  } catch (err: unknown) {
    return next(err);
  }
};

// GET    /api/user/:id
export const getUserProfile = (req: Request, res: Response, next: NextFunction) => {
  try {

  } catch (err: unknown) {
    return next(err);
  }
};

// PUT  /api/user/:id
export const updateUserProfile = (req: Request, res: Response, next: NextFunction) => {
  try {

  } catch (err: unknown) {
    return next(err);
  }
};

// PATCH   /api/user/:id
export const updatePassword = (req: Request, res: Response, next: NextFunction) => {
  try {

  } catch (err: unknown) {
    return next(err);
  }
};

// POST   /api/user/:id/enroll
export const enrollCourse = (req: Request, res: Response, next: NextFunction) => {
  try {

  } catch (err: unknown) {
    return next(err);
  }
};

// POST   /api/user/:id/progress
export const markCourseComplete = (req: Request, res: Response, next: NextFunction) => {
  try {

  } catch (err: unknown) {
    return next(err);
  }
};

// POST   /api/user/:id/bookmark
export const bookmarkItem = (req: Request, res: Response, next: NextFunction) => {
  try {

  } catch (err: unknown) {
    return next(err);
  }
};

// GET    /api/user/:id/notifications
export const getNotifications = (req: Request, res: Response, next: NextFunction) => {
  try {

  } catch (err: unknown) {
    return next(err);
  }
};

// PATCH  /api/user/:id/theme
export const updateTheme = (req: Request, res: Response, next: NextFunction) => {
  try {

  } catch (err: unknown) {
    return next(err);
  }
};

// GET  /api/user/:id/verify
export const verifyUser = (req: Request, res: Response, next: NextFunction) => {
  try {

  } catch (err: unknown) {
    return next(err);
  }
};
