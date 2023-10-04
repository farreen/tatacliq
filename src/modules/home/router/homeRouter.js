import DefaultLayout from "../../../layout/default-layout";
import HomePage from "../pages/HomePage";

export const HomePageRouter = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      // { path: "home", element: <HomePage /> },
    ],
  },
];
