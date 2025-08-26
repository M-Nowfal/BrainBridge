import nodemailer from "nodemailer";
import OTPModel from "../models/otp-model";

// OTP Services
export const generateOTP = (): number => {
  return Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
};

// Function to send OTP via email
export const sendOTPEmail = async (email: string, otp: number, action: string = "login"): Promise<void> => {
  const mailOptions = {
    from: `"BrainBridge" <${process.env.USER_MAIL}>`, // branded sender
    to: email,
    subject: `🔐 Your BrainBridge OTP Code for ${action}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #4CAF50;">BrainBridge Verification</h2>
        <p>Hello Learner,</p>
        <p>Your OTP code for verification is:</p>
        
        <div style="font-size: 24px; font-weight: bold; letter-spacing: 4px; margin: 16px 0; color: #000;">
          ${otp}
        </div>

        <p>This code is valid for <b>5 minutes</b>. Please do not share it with anyone.</p>
        <p>If you did not request this, kindly ignore this email.</p>
        
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;" />
        <p style="font-size: 12px; color: #777;">
          BrainBridge - Collaborative E-Learning & Resource Sharing Platform <br/>
          <a href="https://brain-bridge-psi.vercel.app/" style="color: #4CAF50; text-decoration: none;">Visit BrainBridge</a>
        </p>
      </div>
    `
  };
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    }
  });
  await transporter.sendMail(mailOptions);
};
