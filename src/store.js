import { configureStore } from "@reduxjs/toolkit";
import citySlice from "./Slices/citySlice";
import countSlice from "./Slices/countSlice.js";

export const store = configureStore({
  reducer: {
    city: citySlice,
    count : countSlice,
  }
});
