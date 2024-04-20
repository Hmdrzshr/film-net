import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import Search from "../../Pages/Search";
import AllMovies from "../../Pages/AllMovies";
import SingleMovie from "../../Pages/SingleMovie";
import ContactUs from "../../Pages/ContactUs";
import AboutUs from "../../Pages/AboutUs";
import NotFound from "../../Pages/NotFound";

export default function Router() {
   const router = createBrowserRouter([
      {
         path: "/",
         element: <HomePage />,
      },
      {
         path: "/search",
         element: <Search />,
      },
      {
         path: "/all-movies",
         element: <AllMovies />,
      },
      {
         path: "/single-movie",
         element: <SingleMovie />,
      },
      {
         path: "/contact-us",
         element: <ContactUs />,
      },
      {
         path: "/about-us",
         element: <AboutUs />,
      },
      {
         path: "/*",
         element: <NotFound />,
      },
   ]);
   return <RouterProvider router={router} />;
}
