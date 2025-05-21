import { createSlice } from "@reduxjs/toolkit";

const initialState = { isScrolled: false };

const scrollSlice = createSlice({
  name: "window-state",
  initialState,
  reducers: {
    setIsScrolled: (state, action) => {
      state.isScrolled = action.payload;
      console.log(action.payload);
    },
  },
});

export const { setIsScrolled } = scrollSlice.actions;
export default scrollSlice.reducer;
