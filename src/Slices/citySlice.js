import { createSlice } from "@reduxjs/toolkit";

const citySlice = createSlice({
  initialState: "New York",
  name: "City",
  reducers: {
    setCity: (s, action) => action.payload
  }
});

export const { setCity } = citySlice.actions;
export default citySlice.reducer;
