// darkTheme.js
import { ColorSystemOptions, createTheme } from "@mui/material/styles";
import { darkPalette, lightPalette } from "./colors";

const baseColors = {
  primaryBlue: "#00BFFF",
  secondaryPurple: "#B0A0FF",
  accentYellow: "#FFD700",
  accentRed: "#FF6347",
  accentGreen: "#32CD32",
  pureBlack: "#000000",
  veryDarkGrey: "#121212",
  darkGrey: "#202020",
  mediumGrey: "#616161",
  lightGrey: "#CCCCCC",
  veryLightGrey: "#F5F5F5",
  pureWhite: "#FFFFFF",
};

// darkTheme
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: baseColors.primaryBlue,
      light: "#33D0FF",
      dark: "#008CC9",
      contrastText: baseColors.pureWhite,
    },
    secondary: {
      main: baseColors.secondaryPurple,
      light: "#C7B8FF",
      dark: "#8C7AC7",
      contrastText: baseColors.pureWhite,
    },
    background: {
      default: baseColors.veryDarkGrey, // Main background
      paper: baseColors.darkGrey, // Cards, sections, elevated surfaces
    },
    text: {
      primary: baseColors.pureWhite, // Main text color
      secondary: baseColors.lightGrey, // Secondary text color (e.g., dates, descriptions)
      disabled: "#A0A0A0", // Disabled text
    },
    divider: "#303030", // Darker divider for contrast
    action: {
      active: "rgba(255, 255, 255, 0.7)",
      hover: "rgba(255, 255, 255, 0.08)",
      selected: "rgba(255, 255, 255, 0.16)",
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      focus: "rgba(255, 255, 255, 0.12)",
    },
    info: { main: baseColors.primaryBlue },
    success: { main: baseColors.accentGreen },
    warning: { main: baseColors.accentYellow },
    error: { main: baseColors.accentRed },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      lineHeight: 1.2,
      color: baseColors.pureWhite,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
      color: baseColors.pureWhite, // Or baseColors.primaryBlue if you want the "Dev" to match
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 600,
      color: baseColors.pureWhite,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      color: baseColors.pureWhite,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
      color: baseColors.pureWhite,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      color: baseColors.pureWhite,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
      color: baseColors.lightGrey,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
    caption: {
      fontSize: "0.75rem",
      color: baseColors.lightGrey,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        containedPrimary: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "none", // Dark mode often uses less prominent shadows
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: baseColors.primaryBlue,
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },
  },
  spacing: 8,
});

// lightTheme

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: baseColors.primaryBlue,
      light: "#33D0FF",
      dark: "#008CC9",
      contrastText: baseColors.pureWhite,
    },
    secondary: {
      main: baseColors.secondaryPurple,
      light: "#C7B8FF",
      dark: "#8C7AC7",
      contrastText: baseColors.pureWhite,
    },
    background: {
      default: baseColors.veryLightGrey, // Main background
      paper: baseColors.pureWhite, // Cards, sections, elevated surfaces
    },
    text: {
      primary: "#212121", // Very dark grey for main text
      secondary: baseColors.mediumGrey, // Medium grey for secondary text
      disabled: "#B0B0B0", // Disabled text
    },
    divider: "#E0E0E0", // Light grey divider
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      selected: "rgba(0, 0, 0, 0.08)",
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      focus: "rgba(0, 0, 0, 0.12)",
    },
    info: { main: baseColors.primaryBlue },
    success: { main: baseColors.accentGreen },
    warning: { main: baseColors.accentYellow },
    error: { main: baseColors.accentRed },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      lineHeight: 1.2,
      color: "#212121",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
      color: "#212121",
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 600,
      color: "#212121",
      letterSpacing: "0.05em",
      textTransform: "uppercase",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      color: "#212121",
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
      color: "#212121",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      color: "#212121",
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
      color: baseColors.mediumGrey,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
    caption: {
      fontSize: "0.75rem",
      color: baseColors.mediumGrey,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        containedPrimary: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.05)",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: baseColors.primaryBlue,
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },
  },
  spacing: 8,
});

export const lightColorSystemOptions: ColorSystemOptions = {
  palette: {
    mode: "light",
    primary: {
      main: lightPalette[700],
      light: lightPalette[300],
      dark: lightPalette[700],
      contrastText: "#fff",
    },
    secondary: {
      main: lightPalette[200],
      light: lightPalette[100],
      dark: lightPalette[700],
      contrastText: "#fff",
    },
    background: {
      default: lightPalette[900],
      paper: lightPalette[800],
    },
    text: {
      primary: lightPalette[50],
      secondary: lightPalette[200],
      disabled: lightPalette[100],
    },
    divider: lightPalette[700],
    action: {
      active: lightPalette[200],
      hover: lightPalette[300],
      selected: lightPalette[400],
      disabled: lightPalette[600],
      disabledBackground: lightPalette[800],
      focus: lightPalette[300],
    },
    info: { main: darkPalette[400] },
    success: { main: "#32CD32" },
    warning: { main: "#FFD700" },
    error: { main: "#FF6347" },
  },
};
export const darkColorSystemOptions: ColorSystemOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: darkPalette[500],
      light: darkPalette[300],
      dark: darkPalette[700],
      contrastText: "#fff",
    },
    secondary: {
      main: darkPalette[200],
      light: darkPalette[100],
      dark: darkPalette[700],
      contrastText: "#fff",
    },
    background: {
      default: darkPalette[900],
      paper: darkPalette[800],
    },
    text: {
      primary: darkPalette[50],
      secondary: darkPalette[200],
      disabled: darkPalette[100],
    },
    divider: darkPalette[700],
    action: {
      active: darkPalette[200],
      hover: darkPalette[300],
      selected: darkPalette[400],
      disabled: darkPalette[600],
      disabledBackground: darkPalette[800],
      focus: darkPalette[300],
    },
    info: { main: darkPalette[400] },
    success: { main: "#32CD32" },
    warning: { main: "#FFD700" },
    error: { main: "#FF6347" },
  },
};
