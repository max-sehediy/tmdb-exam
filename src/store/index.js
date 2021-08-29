import { configureStore } from "@reduxjs/toolkit";
import cardReducer from './card/cardStore'
import listsReducer from "./lists/lists";
export const store = configureStore({
  reducer: {
    card: cardReducer,
    listMovie: listsReducer
  },
})
