import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Header from "./components/Header.jsx";
import { Outlet, RouterProvider, createHashRouter } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
//import Photos from "./components/Photos.jsx";
import Comms from "./pages/services/Comms.jsx";
import Projects from "./pages/services/Projects.jsx";
import Photography from "./pages/services/Photography.jsx";
import Life from "./pages/services/Life.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/om",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      { 
        path: "/comms",
        element: <Comms />,
      },
      { 
        path: "/projects",
        element: <Projects />,
      },
      { 
        path: "/photography",
        element: <Photography />,
      },
      { 
        path: "/life",
        element: <Life />,
      },
      {
        path: "/fotos",
        element: <PortfolioPage />,
      },
      {
        path: "/kontakt",
        element: <ContactPage />,
      },
      { 
        path: "/studie",
        element: <Studio />,
      },
      { 
        path: "/byg",
        element: <Built />,
      },
      { 
        path: "/natur",
        element: <Nature />,
      },
      { 
        path: "/ting",
        element: <Stuff />,
      },
      { 
        path: "/event",
        element: <Events />,
      },
      { 
        path: "/divfoto",
        element: <Misc />,
      },
      { 
        path: "/taler",
        element: <Speak />,
      },
      { 
        path: "/raad",
        element: <Advice />,
      },
      { 
        path: "/ture",
        element: <Trips />,
      },
      { 
        path: "/sammen",
        element: <Coop />,
      },
      { 
        path: "/teknik",
        element: <Tech />,
      },
      { 
        path: "/sos",
        element: <SOS />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);