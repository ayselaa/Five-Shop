import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Pages/HomePage/Home";
import Route from "./components/Route/Route"
import Catalog from "./components/Pages/CatalogPage/Catalog";
import CertificatePage from "./components/Pages/CertificatePage/CertificatePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route/>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/catalog", element: <Catalog/> },
      { path: "/certificate", element: <CertificatePage/> },
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
