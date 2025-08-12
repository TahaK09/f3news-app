import React, { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./Home/index.jsx";
import Category from "./Category/index";
import F3Plus from "./Plus/index";
import Entertainment from "./Entertainment/index";
import Contact from "./Contact/index";
import Article from "./Article/index";
import { AppProvider } from "./Context/AppContext";
const PUBLISHABLE_KEY =
  "pk_test_ZXhjaXRlZC1nb3JpbGxhLTkuY2xlcmsuYWNjb3VudHMuZGV2JA";

if (!PUBLISHABLE_KEY) {
  console.error("Clerk publishable key is missing!");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/f3-plus", element: <F3Plus /> },
      { path: "/entertainment", element: <Entertainment /> },
      { path: "/contact", element: <Contact /> },
      { path: "/:page/article/:slug", element: <Article /> },
      { path: "/:page", element: <Category /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </ClerkProvider>
  </React.StrictMode>
);
