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
      direction: readFromLocalStorage({
        value: "theme-direction",
        defValue: "ltr",
      }),
    },
  },
});
store.subscribe(() => {
  writeToLocalStorage({
    key: "theme-mode",
    value: store.getState().theme.mode,
  });
  writeToLocalStorage({
    key: "theme-direction",
    value: store.getState().theme.direction,
  });
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
