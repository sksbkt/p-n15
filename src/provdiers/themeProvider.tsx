/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useThemeMode } from "@/hooks/useThemeHook";
import { store } from "@/store";
import theme from "@/theme";
import { ThemeProvider } from "@mui/material";
import React from "react";
import { Provider } from "react-redux";

const ThemeContent = ({ children }: { children: React.ReactNode }) => {
  const mode = useThemeMode();
  return (
    <ThemeProvider
      theme={theme}
      defaultMode="system"
      // noSsr
    >
      {children}
    </ThemeProvider>
  );
};

const themeProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default themeProviderWrapper;
