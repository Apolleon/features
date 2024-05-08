import { createRoot } from "react-dom/client";
import App from "./extended-switcher/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./extended-switcher/Home";
import Text from "./auto-text/Text";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Text />,
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
