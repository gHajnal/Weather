import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store/index";

import App from "./App";
import Capital from "./capital/Capital";
import Fallback from "./Fallback";
import Home from "./Home";
import Weather from "./weather/Weather";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Fallback />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add",
        element: <Capital />,
      },
      {
        path: "/weather/:capitalName",
        element: <Weather />,
      },
      {
        path: "*",
        element: <Fallback />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
