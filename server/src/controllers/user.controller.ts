import { Request, Response, NextFunction } from "express";
import OTP from "../models/otp-model";
import { generateOTP, sendOTPEmail } from "../services/otp.service";
import User from "../models/user-model";
import { comparePassword, hashPassword } from "../utils/password";

// POST   /api/user/send-otp
export const sendOTP = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.body;
    const { otpfor } = req.params;
    const storedOtp = await OTP.findOne({ email }).lean();
    const otp = generateOTP();
    await sendOTPEmail(email, otp, otpfor);             // Send OTP to email
    if (!storedOtp) await OTP.create({ email, otp });   // Store OTP in DB
    else await OTP.findOneAndUpdate({ email }, { $set: { otp } });
    return res.status(200).json({ message: "OTP sent successfully." });
  } catch (err: unknown) {
    return next(err);
  }
};

// POST   /api/user/verify-otp
export const verifyOTP = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, otp } = req.body;
    const storedOtp = await OTP.findOne({ email }, { otp: 1, _id: 0 });
    if (!storedOtp)
      return res.status(400).json({ message: "OTP expired. Click the resend button below to resend OTP" });
    if (storedOtp.otp !== Number(otp)) 
      return res.status(400).json({ message: "Invalid OTP" });
    await OTP.findOneAndDelete({ email });
    res.status(200).json({ message: "OTP verified successfully." });
  } catch (err: unknown) {
    return next(err);
  }
};

// POST   /api/user/register
export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password } = req.body;
    if (!name.trim() || !email.trim() || !password.trim())
      return res.status(422).json({ message: "Unprocessable Entity, Required feild is missing" });
    if (await User.findOne({ email }))
      return res.status(409).json({ message: "User already exist, Please login" });
    const user = await User.create({ name, email, password: await hashPassword(password), isVerified: true });
    res.status(201).json({ message: "Successfully registered in BrainBridge", userid: user._id });
  } catch (err: unknown) {
    return next(err);
  }
};

// POST   /api/user/login
export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    if (!email.trim() || !password.trim())
      return res.status(422).json({ message: "Unprocessable Entity, Required feild is missing" });
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });
    if (await comparePassword(password, user.password)) {
      await User.findOneAndUpdate({ email }, { $set: { isVerified: true } });
      return res.status(200).json({ message: "Successfully logged-in to BrainBridge", userid: user._id });
    }
    res.status(409).json({ message: "Incorrect email or password" });
  } catch (err: unknown) {
    return next(err);
  }
};

// GET    /api/user/:id
export const getUserProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ message: "User not found, login again" });
    const userInfo = {
      id: user._id,
      isAuthenticated: user.isVerified,
      role: user.role,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      themePrefered: user.themePrefered,
      token: null
    };
    res.status(200).json({ message: "Profile details fetched successfully", user: userInfo });
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
