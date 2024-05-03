import { createRoot } from "react-dom/client";
import App from "./extended-switcher/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./extended-switcher/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
