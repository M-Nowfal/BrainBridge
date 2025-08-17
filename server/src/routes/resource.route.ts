import { 
  deleteResource, getCourseResources, getResource, 
  updateResource, uploadResource 
} from "../controllers/resource.controller";
import express, { Router } from "express";

// Create express route
const resourceRoutes: Router = express.Router();

// User routes
resourceRoutes.route("/").post(uploadResource);
resourceRoutes.route("/:id").get(getResource).patch(updateResource).delete(deleteResource);
resourceRoutes.route("/:courseid/resource").get(getCourseResources);

// Export route
export default resourceRoutes;