import { createQuiz, deleteQuiz, getQuiz, getQuizResults, submitAttempt, updateQuiz } from "@/controllers/quiz.controller";
import express, { Router } from "express";

// Create express route
const quizRoutes: Router = express.Router();

// User routes
quizRoutes.route("/").post(createQuiz);
quizRoutes.route("/:id").get(getQuiz).patch(updateQuiz).delete(deleteQuiz);
quizRoutes.route("/:id/attempt").post(submitAttempt);
quizRoutes.route("/:id/results").get(getQuizResults);

// Export route
export default quizRoutes;