import mongoose from "mongoose";
import { Server as HTTPServer } from "node:http";
import { Server as HTTPSServer } from "node:https";

type AnyServer = HTTPServer | HTTPSServer; // Server Type

// Shutdown DataBase
const shutdown = async (server: AnyServer) => {
  try {
    console.log("Shutting down gracefully...");

    // Close the server
    server.close(async () => {
      await mongoose.connection.close(); // Close db connection
      console.log("HTTP server closed");
      process.exit(0); // Exit process with success
    });
  } catch (err: unknown) {
    const error = err instanceof Error ? err.message : err;
    console.error("Error while Shutdown:", error);
    process.exit(1); // Exit process with failure
  }
};

// Export the shutdown
export default shutdown;
