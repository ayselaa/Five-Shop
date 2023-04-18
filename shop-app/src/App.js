import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Pages/HomePage/Home";
import Route from "./components/Route/Route";
import Catalog from "./components/Pages/CatalogPage/Catalog";
import CertificatePage from "./components/Pages/CertificatePage/CertificatePage";
import Basket from "./components/Pages/Basket/Basket";
import Cabinet2 from "./components/Pages/Cabinet/Cabinet2";
import Cabinet3 from "./components/Pages/Cabinet/Cabinet3";
import Cabinet4 from "./components/Pages/Cabinet/Cabinet4";
import Cabinet5 from "./components/Pages/Cabinet/Cabinet5";
import Cabinet6 from "./components/Pages/Cabinet/Cabinet6";
import Cabinet7 from "./components/Pages/Cabinet/Cabinet7";
import Cabinet8 from "./components/Pages/Cabinet/Cabinet8";
import Card from "./components/Pages/Card/Card";
import Faq from "./components/Pages/Faq/Faq";
import Modals from "./components/Pages/Modals/Modals";
import Payment from "./components/Pages/Payment/Payment";
import SiteMap from "./components/Pages/SiteMap/SiteMap";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/catalog", element: <Catalog /> },
      { path: "/certificate", element: <CertificatePage /> },
      { path: "/basket", element: <Basket /> },

      { path: "/cabınet2", element: <Cabinet2 /> },
      { path: "/cabınet3", element: <Cabinet3 /> },
      { path: "/cabınet4", element: <Cabinet4 /> },
      { path: "/cabınet5", element: <Cabinet5 /> },
      { path: "/cabınet6", element: <Cabinet6 /> },
      { path: "/cabınet7", element: <Cabinet7 /> },
      { path: "/cabınet8", element: <Cabinet8 /> },
      { path: "/card", element: <Card /> },
      { path: "/modals", element: <Modals /> },
      { path: "/payment", element: <Payment /> },
      { path: "/sitemap", element: <SiteMap /> },
      { path: "/faq", element: <Faq /> },
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
