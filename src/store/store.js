import { configureStore } from "@reduxjs/toolkit";
import introSlice from "./slices/introSlice";

export const store = configureStore({
  reducer: {
    introReducer: introSlice,
  },
});

export default store;
