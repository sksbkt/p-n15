import { createSlice } from "@reduxjs/toolkit";

const initialState = { mode: "dark", direction: "ltr" };
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
    setThemeDirection: (state, action) => {
      state.mode = action.payload;
    },
    toggleThemeDirection: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const {
  setThemeMode,
  toggleThemeMode,
  setThemeDirection,
  toggleThemeDirection,
} = themeSlice.actions;

export default themeSlice.reducer;
