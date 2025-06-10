"use client";

import { useThemeMode } from "@/hooks/useThemeHook";
import { useWindow } from "@/hooks/useWindow";
import { store } from "@/store";
import { useBaseTheme } from "@/theme/useBaseThemeHook";
import { Direction } from "@/types";
import {
  Box,
  CssBaseline,
  InitColorSchemeScript,
  ThemeProvider,
  useColorScheme,
} from "@mui/material";
import { useEffect } from "react";
import { Provider } from "react-redux";

const ThemeContent = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useBaseTheme();
  const { direction, mode } = useThemeMode();
  const { setMode } = useColorScheme();

  const handleDocumentDirection = (direction: Direction) => {
    document.documentElement.setAttribute("dir", direction);
    // ? still figuring out whether its the best way to change theme direction dynamically or not
    // * WIP
    theme.direction = direction;
  };

  useEffect(() => {
    setMode(mode);
    handleDocumentDirection(direction);
  }, [mode, direction, setMode]);
  const { isScrolled, setIsScrolled } = useWindow();
  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is greater than a threshold (e.g., 50 pixels)
      if (window.scrollY > 50) {
        // dispatch(setIsScrolled(true));
        setIsScrolled(true);

        // setIsScrolled(true);
      } else {
        setIsScrolled(false);
        // dispatch(setIsScrolled(false));
        // setIsScrolled(false);
      }
    };
    handleScroll();
    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIsScrolled]);

  useEffect(() => {}, []);
  return (
    <>
      {/* <Box sx={{ height: isScrolled ? "60px" : "90px" }} /> */}

      {children}
    </>
  );
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
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <ThemeContent>{children}</ThemeContent>
      </ThemeProvider>
    </Provider>
  );
};

export default ThemeProviderWrapper;
