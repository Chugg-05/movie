import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home.jsx";
import SeeMore from "../pages/see-more.jsx";
import Watch from "../pages/watch.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/see-more",
    element: <SeeMore />,
  },
  {
    path: "/watch",
    element: <Watch />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
