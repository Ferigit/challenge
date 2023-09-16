import { lazy } from "react";
import componentLoader from "@/utils/componentLoader";

const HomePage = lazy(() =>
  componentLoader(
    () => import(/* webpackChunkName: "HomePage" */ "@/pages/HomePage")
  )
);

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
];

export default routes;
