import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  initialState: 3,
  name: "count",
  reducers: {
    loadmore : s=>Math.min(s+3,12),
    reset : s=>3
  }
});

export const { loadmore, reset} = countSlice.actions;
export default countSlice.reducer;
