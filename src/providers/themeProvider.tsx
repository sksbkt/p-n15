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
import { useMemo } from "react";
// import { useEffect } from "react";
import { Provider } from "react-redux";

const ThemeContent = ({ children }: { children: React.ReactNode }) => {
  const { setColorScheme } = useColorScheme();
  const mode = useThemeMode();
  const { setMode } = useColorScheme();

  useMemo(() => setMode(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      {children}
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
