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


import Advice from "./pages/services/Advice.jsx";
import Built from "./pages/services/Built.jsx";
import Coop from "./pages/services/Coop.jsx";
import Events from "./pages/services/Events.jsx";
import Misc from "./pages/services/Misc.jsx";
import Nature from "./pages/services/Nature.jsx";
import SOS from "./pages/services/SOS.jsx";
import Speak from "./pages/services/Speak.jsx";
import Studio from "./pages/services/Studio.jsx";
import Stuff from "./pages/services/Stuff.jsx";
import Tech from "./pages/services/Tech.jsx";
import Trips from "./pages/services/Trips.jsx";


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
        path: "/fotos",
        element: <PortfolioPage />,
      },
      {
        path: "/kontakt",
        element: <ContactPage />,
      },
      { 
        path: "/services/studio",
        element: <Studio />,
      },
      { 
        path: "/services/byg",
        element: <Built />,
      },
      { 
        path: "/services/natur",
        element: <Nature />,
      },
      { 
        path: "/services/produkt",
        element: <Stuff />,
      },
      { 
        path: "/services/event",
        element: <Events />,
      },
      { 
        path: "/services/divfoto",
        element: <Misc />,
      },
      { 
        path: "/services/taler",
        element: <Speak />,
      },
      { 
        path: "/services/raad",
        element: <Advice />,
      },
      { 
        path: "/services/ture",
        element: <Trips />,
      },
      { 
        path: "/services/sammen",
        element: <Coop />,
      },
      { 
        path: "/services/teknik",
        element: <Tech />,
      },
      { 
        path: "/services/sos",
        element: <SOS />,
      },
      /*
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
      },*/
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);