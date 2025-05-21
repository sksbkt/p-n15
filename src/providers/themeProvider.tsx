/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useThemeMode } from "@/hooks/useThemeHook";
import { store } from "@/store";
import theme from "@/theme";
// import theme, { useAppTheme } from "@/theme";
import {
  CssBaseline,
  InitColorSchemeScript,
  ThemeProvider,
  useColorScheme,
} from "@mui/material";
import { useEffect, useMemo } from "react";
// import { useEffect } from "react";
import { Provider } from "react-redux";

const ThemeBaseContent = ({ children }: { children: React.ReactNode }) => {
  const mode = useThemeMode();
  const { setMode } = useColorScheme();

  useEffect(() => setMode(mode), [mode, setMode]);
  return children;
};
const ThemeContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <ThemeBaseContent>{children}</ThemeBaseContent>
    </ThemeProvider>
  );
};

const ThemeProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <InitColorSchemeScript
        attribute="class"
        defaultMode="system"
      />
      <ThemeContent>{children}</ThemeContent>
    </Provider>
  );
};

export default ThemeProviderWrapper;
