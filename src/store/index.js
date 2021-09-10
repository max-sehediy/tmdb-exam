import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "./currentUser/currentUser";
import genresReduser from "./genres/genres";
import listsReducer from "./lists/lists";
import movieReducer from "./movieItem/movieItem";
import searchReducer from "./searchMovies/searchMovies";
export const store = configureStore({
  reducer: {
    movieItem: movieReducer,
    listMovie: listsReducer,
    searchMovies: searchReducer,
    genres: genresReduser,
    currentUser: currentUserReducer,
  },
})
