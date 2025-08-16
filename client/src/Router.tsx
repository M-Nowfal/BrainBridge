import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import HomeLayout from "./layouts/HomeLayout";

// Client side router
const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        { index: true, element: <Home /> }
      ]
    },
    { path: "*", element: <PageNotFound /> },
  ]);

  // Pass the routes to RouterProvider
  return <RouterProvider router={router} />;
};

// export the router
export default Router;