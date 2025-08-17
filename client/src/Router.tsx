import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import HomeLayout from "./layouts/HomeLayout";
import Register from "./pages/Register";
import Login from "./pages/Login";

// Application-level routing configuration
const Router = () => {
  // Define routes with nested layouts and fallback handling
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />, // Layout wrapper for home-related routes
      children: [
        { index: true, element: <Home /> }, // Default route -> Home page
      ],
    },
    { path: "/register", element: <Register /> }, // Registration page
    { path: "/login", element: <Login /> },       // Login page
    { path: "*", element: <PageNotFound /> },     // Catch-all for undefined routes
  ]);

  // Provide the router instance to the app
  return <RouterProvider router={router} />;
};

// Export the router for use in App entry point
export default Router;
