import {
  bookmarkItem, enrollCourse, getNotifications,
  getUserProfile, loginUser, markCourseComplete,
  registerUser, updatePassword, updateTheme,
  updateUserProfile, verifyUser
} from "../controllers/user.controller";
import express, { Router } from "express";

// Create express route
const userRoutes: Router = express.Router();

// User routes
userRoutes.route("/register").post(registerUser);
userRoutes.route("/login").post(loginUser);
userRoutes.route("/:id").get(getUserProfile).put(updateUserProfile).patch(updatePassword);
userRoutes.route("/:id/enroll").post(enrollCourse);
userRoutes.route("/:id/progress").post(markCourseComplete);
userRoutes.route("/:id/bookmark").post(bookmarkItem);
userRoutes.route("/:id/notifications").get(getNotifications);
userRoutes.route("/:id/theme").patch(updateTheme);
userRoutes.route("/:id/verify").get(verifyUser);

// Export route
export default userRoutes;