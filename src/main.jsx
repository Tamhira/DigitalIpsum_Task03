import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import DigitalMarketing from "./components/DigitalMarketing.jsx";
import About from "./components/About.jsx";
import Process from "./components/Process.jsx";
import Pricing from "./components/Pricing.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/digital-marketing",
    element: <DigitalMarketing />,
  },
  {
    path: "/about",
    element: <About/>,
  }, 
  {
    path: "/process",
    element: <Process/>,
  },
  {
    path: "/pricing",
    element: <Pricing/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
