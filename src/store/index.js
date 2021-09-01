import { configureStore } from "@reduxjs/toolkit";
import listsReducer from "./lists/lists";
import movieReducer  from "./movieItem/movieItem";
export const store = configureStore({
  reducer: {
    movieItem: movieReducer,
    listMovie: listsReducer
  },
})
