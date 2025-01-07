import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  About,
  HomeLayout,
  Landing,
  Error,
  Newsletter,
  Cocktail,
  SinglePageError,
} from "./pages";

import { loader as landingLoader } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Cocktail"; // Ensure this is correctly exported

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader,
      },
      {
        path: "cocktail/:id",
        errorElement: <SinglePageError />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
};

export default App;
