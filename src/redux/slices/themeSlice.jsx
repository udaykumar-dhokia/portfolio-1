import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: 0,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleMode(state) {
      state.mode = state.mode === 0 ? 1 : 0;
    },
  },
});

export const { toggleMode } = themeSlice.actions;
export default themeSlice.reducer;
