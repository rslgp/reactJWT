import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import App from './App';
import GlobalVariables from "./components/func/GlobalVariables";
import Page from "./components/firebasePages/Page";
import PublicPage from "./components/firebasePages/PublicPage";
import UsersByTag from "./components/firebasePages/UsersByTag";
import AllTags from "./components/firebasePages/AllTags";

// Set the initial hash value to '/#' when the application loads.
if (window.location.hash === "") {
  window.location.hash = "/";
}

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: GlobalVariables.loginPage,
    element: <App />
  },
  {
    path: GlobalVariables.profilePage,
    element: <Page />,
  },
  {
    path: GlobalVariables.publicProfilePage,
    element: <PublicPage />,
  },
  {
    path: GlobalVariables.tagPage,
    element: <UsersByTag />,
  },
  {
    path: GlobalVariables.allTagPage,
    element: <AllTags />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode> //fix useEffect running twice
    <RouterProvider router={router} />
  //</React.StrictMode>
);
