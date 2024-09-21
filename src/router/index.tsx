import App from "App";
import { lazy, LazyExoticComponent, Suspense } from "react";
import { createHashRouter } from "react-router-dom";
import { routes } from "./routes";

const HouseList = lazy(() => import("pages/house-list/HouseList"));
const AboutUs = lazy(() => import("pages/about-us/AboutUs"));
const NewHouse = lazy(() => import("pages/new-house/NewHouse"));
const HouseDetails = lazy(() => import("pages/house-details/HouseDetails"));

const lazyPage = (Page: LazyExoticComponent<() => JSX.Element>) => (
  <Suspense fallback="loading page...">
    <Page />
  </Suspense>
);

export const router = createHashRouter([
  {
    path: routes.home,
    element: <App />,
    children: [
      {
        index: true,
        element: lazyPage(HouseList),
      },
      {
        path: routes.aboutUs,
        element: lazyPage(AboutUs),
      },
      {
        path: routes.newHouse,
        element: lazyPage(NewHouse),
      },
      {
        path: routes.houseDetails,
        element: lazyPage(HouseDetails),
      },
    ],
  },
]);
