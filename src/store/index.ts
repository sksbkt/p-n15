import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import {
  readFromLocalStorage,
  writeToLocalStorage,
} from "@/store/utils/localStorage";

export const store = configureStore({
  reducer: { theme: themeReducer },
  preloadedState: {
    theme: {
      mode: readFromLocalStorage({ value: "theme-mode", defValue: "dark" }),
    },
  },
});
store.subscribe(() => {
  writeToLocalStorage({
    key: "theme-mode",
    value: store.getState().theme.mode,
  });
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
