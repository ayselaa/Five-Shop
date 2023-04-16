import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Pages/HomePage/Home";
import Route from "./components/Route/Route"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route/>,
    children: [
      { path: "/", element: <Home /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
