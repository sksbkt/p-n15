import { darkColorSystemOptions, lightColorSystemOptions } from "@/theme/theme";
import { createTheme, useColorScheme } from "@mui/material";
import { useMemo } from "react";

export const useBaseTheme = () => {
  const { mode } = useColorScheme();
  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode: mode as "light" | "dark",
        ...(mode === "dark"
          ? darkColorSystemOptions.palette
          : lightColorSystemOptions.palette),
      },
      colorSchemes: {
        light: lightColorSystemOptions,
        dark: darkColorSystemOptions,
      },
      cssVariables: {
        colorSchemeSelector: "class",
      },
      components: {
        MuiAppBar: {
          styleOverrides: {
            root: {
              transition: "all 0.3s ease-in-out",
              backgroundColor: "unset",
            },
          },
        },
        MuiToolbar: {
          styleOverrides: {
            root: {
              transition: "all 0.3s ease-in-out",
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: "8px",
            },
            contained: ({ theme }) => ({
              backgroundColor: theme.vars.palette.primary.main,
            }),
          },
        },
        MuiCard: {
          styleOverrides: {
            root: ({ theme }) => {
              console.log(theme.palette.mode);

              return {
                border:
                  theme.palette.mode === "dark"
                    ? "1px solid red"
                    : "1px solid rgba(0, 0, 0, 0.12)",
              };
            },
          },
        },
        MuiPaper: {
          styleOverrides: {
            root: {
              boxShadow: "none",
              // border: "1px solid rgba(0, 0, 0, 1)",
            },
          },
        },
        MuiLink: {
          styleOverrides: {
            root: {
              color: "#00BCD4",
            },
          },
        },
      },
    });
  }, []);
  return { theme };
};
