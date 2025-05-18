import { createSlice } from "@reduxjs/toolkit";

const initialState = { mode: "dark" };
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeMode: (state, action) => {
      state.mode = action.payload;
    },
    toggleThemeMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setThemeMode, toggleThemeMode } = themeSlice.actions;

export default themeSlice.reducer;
