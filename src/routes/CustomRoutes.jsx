import { BrowserRouter, useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Preloader from "../components/Preloader";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Blog from "../pages/blog/Blog";
import PageNotFound from "../pages/not-found/404";
import CommingSoon from "../pages/comming-soon/CommingSoon";
import Gallery from "../pages/galery/Gallery";
import Faq from "../pages/faq/Faq";

const RouteConfig = () => {
  const routes = [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "blogs",
          element: <Blog />,
        },
        {
          path: "comming-soon",
          element: <CommingSoon />,
        },
        {
          path: "gallery",
          element: <Gallery />,
        },
        {
          path: "faq",
          element: <Faq />,
        },
        {
          path: "loader",
          element: <Preloader />,
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
  ];

  return useRoutes(routes);
};

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <RouteConfig />
    </BrowserRouter>
  );
};

export default CustomRoutes;
