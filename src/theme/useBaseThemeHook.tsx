import {
  commonComponents,
  getDesignToken,
  typographyOptions,
} from "@/theme/palettes";
import { createTheme, useColorScheme } from "@mui/material";
import { useMemo } from "react";

export const useBaseTheme = () => {
  const { mode } = useColorScheme();

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        colorSchemes: {
          light: getDesignToken("light"),
          dark: getDesignToken("dark"),
        },
        cssVariables: {
          colorSchemeSelector: "class",
        },
        typography: typographyOptions,
        components: {
          ...commonComponents,
          // Mode-specific component overrides

          MuiAppBar: {
            styleOverrides: {
              root: {
                transition: "all 0.3s ease-in-out", // Smooth transition for size and position changes
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Subtle shadow for depth

                backgroundColor: mode === "light" ? "#FFFFFF" : "#2D3748",
                color: mode === "light" ? "#2D3748" : "#FFFFFF",
              },
            },
          },
          MuiToolbar: {
            styleOverrides: {
              root: {
                transition: "all 0.3s ease-in-out", // Smooth transition for padding changes
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: "8px", // Rounded buttons
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                ...commonComponents.MuiCard.styleOverrides.root,
                boxShadow:
                  mode === "light"
                    ? "0px 4px 10px rgba(0, 0, 0, 0.05)"
                    : "0px 4px 10px rgba(0, 0, 0, 0.3)",
                border:
                  mode === "light"
                    ? "1px solid #E2E8F0"
                    : "1px solid rgba(255, 255, 255, 0.1)",
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                ...commonComponents.MuiPaper.styleOverrides.root,
                boxShadow:
                  mode === "light"
                    ? "0px 4px 10px rgba(0, 0, 0, 0.05)"
                    : "0px 4px 10px rgba(0, 0, 0, 0.3)",
              },
            },
          },
          MuiLink: {
            styleOverrides: {
              root: {
                ...commonComponents.MuiLink.styleOverrides.root,
                color: "#00BCD4", // Accent color for links (same for both modes)
              },
            },
          },
        },
      }),
    [mode]
  );
  return { theme };
};
