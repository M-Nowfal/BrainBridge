import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import HomeLayout from "./layouts/HomeLayout";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import AuthLayout from "./layouts/AuthLayout";
import ResetPassword from "./pages/auth/ResetPassword";
import VerifyOTP from "./pages/auth/VerifyOTP";
import ForgotPassword from "./pages/auth/ForgotPassword";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";

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
        { path: "register", element: <Register /> },              // Registration page
        { path: "login", element: <Login /> },                    // Login page
        { path: "forgot-password", element: <ForgotPassword /> }, // Forgot Password page
        { path: "reset-password", element: <ResetPassword /> },   // Reset Password page
        { path: "verify-otp", element: <VerifyOTP /> },           // OTP Verification page
      ],
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { index: true, element: <Dashboard /> },
      ],
    },
    { path: "*", element: <PageNotFound /> },     // Catch-all for undefined routes
  ]);

  // Provide the router instance to the app
  return <RouterProvider router={router} />;
};

// Export the router for use in App entry point
export default Router;
