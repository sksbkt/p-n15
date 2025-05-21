"use client";

import { useThemeMode } from "@/hooks/useThemeHook";
import { store } from "@/store";
import theme from "@/theme";
import { Direction } from "@/types";
import {
  CssBaseline,
  InitColorSchemeScript,
  ThemeProvider,
  useColorScheme,
} from "@mui/material";
import { useEffect } from "react";
import { Provider } from "react-redux";

const ThemeContent = ({ children }: { children: React.ReactNode }) => {
  const { direction, mode } = useThemeMode();
  const { setMode } = useColorScheme();

  const handleDocumentDirection = (direction: Direction) => {
    document.documentElement.setAttribute("dir", direction);
  };

  useEffect(() => {
    setMode(mode);
    handleDocumentDirection(direction);
  }, [mode, direction, setMode]);

  return children;
};

const ThemeProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <InitColorSchemeScript
        attribute="class"
        defaultMode="system"
      />
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <ThemeContent>{children}</ThemeContent>
      </ThemeProvider>
    </Provider>
  );
};

export default ThemeProviderWrapper;
