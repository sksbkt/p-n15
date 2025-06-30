"use client";

import { useThemeMode } from "@/hooks/useThemeHook";
import { useWindow } from "@/hooks/useWindow";
import { store } from "@/store";
import { useBaseTheme } from "@/theme/useBaseThemeHook";
import { Direction } from "@/types";
import {
  CssBaseline,
  InitColorSchemeScript,
  ThemeProvider,
  Experimental_CssVarsProvider as CssVarsProvider,
} from "@mui/material";
import React, { useCallback, useEffect } from "react";
import { Provider } from "react-redux";

const ThemeContent = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useBaseTheme();
  const { direction } = useThemeMode();

  const handleDocumentDirection = useCallback(
    (direction: Direction) => {
      document.documentElement.setAttribute("dir", direction);
      // ? still figuring out whether its the best way to change theme direction dynamically or not
      // * WIP
      theme.direction = direction;
    },
    [theme]
  );
  // ! conflict with useColorScheme
  useEffect(() => {
    handleDocumentDirection(direction);
  }, [direction, handleDocumentDirection]);
  const { setIsScrolled } = useWindow();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIsScrolled]);

  useEffect(() => {}, []);
  return <>{children}</>;
};

const ThemeProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  // const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useBaseTheme();
  return (
    <Provider store={store}>
      <InitColorSchemeScript
        attribute="class"
        defaultMode="system"
      />
      {/* <ThemeProvider theme={theme}> */}
      <CssVarsProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <ThemeContent>{children}</ThemeContent>
      </CssVarsProvider>
      {/* </ThemeProvider> */}
    </Provider>
  );
};

export default ThemeProviderWrapper;
