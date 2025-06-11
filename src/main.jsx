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
import IT from "./pages/services/IT.jsx";
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
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      { 
        path: "/services/it",
        element: <IT />,
      },
      { 
        path: "/services/projects",
        element: <Projects />,
      },
      { 
        path: "/services/photography",
        element: <Photography />,
      },
      { 
        path: "/services/life",
        element: <Life />,
      },
      {
        path: "/photos",
        element: <PortfolioPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);