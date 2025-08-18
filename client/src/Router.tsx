import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import HomeLayout from "./layouts/HomeLayout";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import AuthLayout from "./layouts/AuthLayout";
import ResetPassword from "./pages/auth/ResetPassword";

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
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        { path: "register", element: <Register /> }, // Registration page
        { path: "login", element: <Login /> },       // Login page
        { path: "resetpwd", element: <ResetPassword /> },       // Reset Password page
      ],
    },
    { path: "*", element: <PageNotFound /> },     // Catch-all for undefined routes
  ]);

  // Provide the router instance to the app
  return <RouterProvider router={router} />;
};

// Export the router for use in App entry point
export default Router;
