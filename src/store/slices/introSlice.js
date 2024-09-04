import { createSlice } from "@reduxjs/toolkit";

export const introSlice = createSlice({
  name: "introSlice",
  initialState: { introComplete: false },
  reducers: {
    setIntroComplete: (state) => {
      state.introComplete = true;
    },
  },
});

export const introActions = introSlice.actions;

export default introSlice.reducer;
