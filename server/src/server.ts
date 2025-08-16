import dotenv from "dotenv";
dotenv.config(); // Load environment variables

import app from "./app";
import shutdown from "./utils/shutdown";
import connect from "./utils/connect-db";


(async () => {
  try {
    await connect(); // Connect DataBase
    const PORT = process.env.PORT ? Number(process.env.PORT) : 3000; //import PORT from .env

    // Start the Server
    const server = app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });

    // Graceful shutdown
    process.on("SIGTERM", () => shutdown(server));
    process.on("SIGINT", () => shutdown(server));
  } catch (err: unknown) {
    const error = err instanceof Error ? err.message : err;
    console.error("Failed to start server:", error);
    process.exit(1);
  }
})();