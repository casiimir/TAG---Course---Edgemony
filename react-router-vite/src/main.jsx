import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import _404 from "./_404.jsx";
import Contacts from "./routes/Contacts.jsx";
// import Root from "./routes/root.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Todo from "./routes/Todo.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <_404 />,
    children: [
      {
        path: "/contacts/:id",
        element: <Contacts />,
      },
      {
        path: "/todos/:id",
        element: <Todo />,
      },
    ],
  },
  {
    path: "/about",
    element: <h1>About page</h1>,
  },
  // {
  //   path: "/contacts",
  //   element: <Contacts />,
  // },
  // {
  //   path: "/contacts/:id",
  //   element: <Contacts />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
