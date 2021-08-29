import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";
import Profile from "./pages/Profile";
import { MAIN_PAGE, MOVIE_PAGE, PROFILE_PAGE } from "./utils/constans";

export const publicRoutes = [
  {
    path: MAIN_PAGE,
    Component: Home
  },
  {
    path: MOVIE_PAGE + '/:id',
    Component: MoviePage
  },
  {
    path: PROFILE_PAGE,
    Component: Profile
  },
]