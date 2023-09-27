import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import App from './App';
import Page from "./components/Page";

const router = createBrowserRouter([
  {
    path: "/reactJWT",
    element: <App />,
    children:[
      {
        path: "/page",
        element: <Page />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
