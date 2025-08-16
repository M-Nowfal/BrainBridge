import { addResource, createCourse, deleteCourse, enrollStudent, getCourse, getCourseProgress, getCourses, postReview, publishCourse, updateCourse } from "@/controllers/course.controller";
import express, { Router } from "express";

// Create express route
const courseRoutes: Router = express.Router();

// User routes
courseRoutes.route("/").get(getCourses).post(createCourse);
courseRoutes.route("/:id").get(getCourse).delete(deleteCourse).patch(updateCourse);
courseRoutes.route("/:id/enroll").post(enrollStudent);
courseRoutes.route("/:id/resource").post(addResource);
courseRoutes.route("/:id/review").post(postReview);
courseRoutes.route("/:id/progress").get(getCourseProgress);
courseRoutes.route("/:id/publish").patch(publishCourse);

// Export route
export default courseRoutes;