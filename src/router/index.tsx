import App from "App";
import { lazy, LazyExoticComponent, Suspense } from "react";
import { createHashRouter } from "react-router-dom";
import { routes } from "./routes";
import ProtectedRoute from "./ProtectedRoute";

const HouseList = lazy(() => import("pages/house-list/HouseList"));
const AboutUs = lazy(() => import("pages/about-us/AboutUs"));
const NewHouse = lazy(() => import("pages/new-house/NewHouse"));
const HouseDetails = lazy(() => import("pages/house-details/HouseDetails"));
const Register = lazy(() => import("pages/register/Register"));

const lazyPage = (
  Page: LazyExoticComponent<() => JSX.Element>,
  { needAuth }: { needAuth: boolean }
) => {
  const content = (
    <Suspense fallback="loading page...">
      <Page />
    </Suspense>
  );
  return needAuth ? <ProtectedRoute>{content}</ProtectedRoute> : content;
};

export const router = createHashRouter([
  {
    path: routes.home,
    element: <App />,
    children: [
      {
        index: true,
        element: lazyPage(HouseList, { needAuth: true }),
      },
      {
        path: routes.aboutUs,
        element: lazyPage(AboutUs, { needAuth: false }),
      },
      {
        path: routes.newHouse,
        element: lazyPage(NewHouse, { needAuth: true }),
      },
      {
        path: routes.houseDetails,
        element: lazyPage(HouseDetails, { needAuth: true }),
      },
      {
        path: routes.register,
        element: lazyPage(Register, { needAuth: false }),
      },
    ],
  },
]);
