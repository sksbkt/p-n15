import { Direction } from "@/types";
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
    setThemeDirection: (state, action: { payload: Direction }) => {
      state.direction = action.payload;
    },
    toggleThemeDirection: (state) => {
      console.log(state);

      state.direction = state.direction === "ltr" ? "rtl" : "ltr";
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
