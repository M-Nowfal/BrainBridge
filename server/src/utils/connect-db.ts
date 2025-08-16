import mongoose, { MongooseError } from "mongoose";

// Connect MongoDB
const connect = async (): Promise<void> => {
  const MONGO_URI = process.env.MONGO_URI; // Import MongoDB connection string from .env

  if (!MONGO_URI) {
    console.log("MONGO_URI is not defined in .env");
    process.exit(1); // Exit process with failure
  }

  try {
    await mongoose.connect(MONGO_URI);
    console.log("DataBase Connected Successfully!");
  } catch (err: unknown) {
    const error = err instanceof MongooseError ? err.message : err;
    console.log("Connection failed", error);
    process.exit(1); // Exit process with failure
  }
};

// Export the connection
export default connect;