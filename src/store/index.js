import { configureStore } from "@reduxjs/toolkit";
import genresReduser from "./genres/genres";
import listsReducer from "./lists/lists";
import movieReducer from "./movieItem/movieItem";
import searchReducer from "./searchMovies/searchMovies";
export const store = configureStore({
  reducer: {
    movieItem: movieReducer,
    listMovie: listsReducer,
    searchMovies: searchReducer,
    genres: genresReduser
  },
})
