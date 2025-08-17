import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import userRoutes from "./routes/user.route";
import courseRoutes from "./routes/course.route";
import quizRoutes from "./routes/quiz.route";
import resourceRoutes from "./routes/resource.route";

const app = express();   // Create express app
app.use(express.json()); // Use json in request body

// Check CORS env variable early
if (!process.env.CORS_ORIGIN) {
  console.error("CORS_ORIGIN is not set in .env");
  process.exit(1); // Exit the process
}

const allowedOrigin = String(process.env.CORS_ORIGIN);

// Middlewares
app.use(cors({ origin: [allowedOrigin] }));

// Routes
app.use("/api/user", userRoutes);
app.use("/api/course", courseRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/resource", resourceRoutes);

// Handle Server Error
app.use((err: unknown, _req: Request, res: Response, next: NextFunction) => {
  const error = err instanceof Error ? err.message : String(err);
  res.status(500).json({ message: "Internal Server Error", error });
});

// Export the express app
export default app;
