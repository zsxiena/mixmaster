
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

import { loader as landingLoader } from "./pages/landing";

const router = createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout/>,
    errorElement:<Error/>,
    children: [
      {
        index:true,
        element: <Landing/>,
        errorElement: <SinglePageError/>,
        loader: landingLoader,
      } ,
      {
        path: 'cocktail',
        element: <Cocktail/>
      } ,
      {
        path: 'newsletter',
        element: <Newsletter/>
      } ,
      {
        path: 'about',
        element: <About/>
      } 
    ]
  },
  {
    path:'/about',
    element:<About/>
  }
])

const App = () => {
  return <RouterProvider router={router} />
};
export default App;
