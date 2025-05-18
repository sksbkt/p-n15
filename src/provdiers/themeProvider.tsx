/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useThemeMode } from "@/hooks/useThemeHook";
import { store } from "@/store";
import { useAppTheme } from "@/theme";
// import theme from "@/theme";
import { getDesignToken } from "@/theme/palettes";
import {
  createTheme,
  CssBaseline,
  extendTheme,
  PaletteMode,
  ThemeProvider,
  useTheme,
} from "@mui/material";
import { useEffect, useMemo } from "react";
import { Provider } from "react-redux";

const ThemeContent = ({ children }: { children: React.ReactNode }) => {
  const mode = useThemeMode();
  // const themeMemo = useMemo(
  //   () => theme(mode as PaletteMode),
  //   // () => {
  //   //   theme.palette.mode = mode as PaletteMode;
  //   // },
  //   // () =>
  //   //   createTheme({
  //   //     palette: {
  //   //       mode: mode as PaletteMode,
  //   //       background: {
  //   //         default:
  //   //           mode === "dark" ? "hsl(230, 17%, 14%)" : "hsl(0, 0%, 100%)",
  //   //       },
  //   //     },
  //   //   }),
  //   [mode]
  // );

  const theme = useAppTheme(mode);

  return (
    <ThemeProvider
      theme={theme}
      // defaultMode="system"
      noSsr
    >
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
};

const ThemeProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeContent>{children}</ThemeContent>
    </Provider>
  );
};

export default ThemeProviderWrapper;
