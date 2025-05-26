"use client";
import {
  ColorSystemOptions,
  PaletteMode,
  TypographyVariantsOptions,
} from "@mui/material";

// Define common typography settings
export const typographyOptions: TypographyVariantsOptions = {
  fontFamily: "Inter, sans-serif",
  h1: {
    fontWeight: 700,
    fontSize: "3rem", // Example size
  },
  h2: {
    fontWeight: 600,
    fontSize: "2.5rem",
  },
  h3: {
    fontWeight: 600,
    fontSize: "2rem",
  },
  h4: {
    fontWeight: 500,
    fontSize: "1.5rem",
  },
  body1: {
    fontSize: "1rem",
    lineHeight: 1.6,
  },
  body2: {
    fontSize: "0.875rem",
    lineHeight: 1.5,
  },
  button: {
    textTransform: "none", // Keep button text as is, not all caps
    fontWeight: 600,
  },
};

// Define common component overrides
export const commonComponents = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 8, // Rounded corners for buttons
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 8, // Rounded corners for cards/paper
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 8,
      },
    },
  },
  MuiLink: {
    styleOverrides: {
      root: {
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline",
        },
      },
    },
  },
};

// Function to get the design tokens based on the mode
export const getDesignToken = (mode: PaletteMode): ColorSystemOptions => {
  // Removed PaletteMode type for broader compatibility in this environment
  return {
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: {
              main: "#00BCD4", // Teal accent color
              light: "#4DD0E1",
              dark: "#0097A7",
              contrastText: "#FFFFFF",
            },
            secondary: {
              main: "#FFC107", // Amber for secondary actions/highlights
              light: "#FFD54F",
              dark: "#FFA000",
              contrastText: "#212121",
            },
            error: {
              main: "#EF5350",
            },
            warning: {
              main: "#FF9800",
            },
            info: {
              main: "#2196F3",
            },
            success: {
              main: "#4CAF50",
            },
            background: {
              default: "#F7FAFC", // Very light grey/off-white for main background
              paper: "#FFFFFF", // White for cards/surfaces
            },
            text: {
              primary: "#2D3748", // Dark blue-grey text
              secondary: "#4A5568", // Medium grey text for secondary info
              disabled: "#A0AEC0",
            },
            divider: "#E2E8F0", // Light grey for dividers
          }
        : {
            primary: {
              main: "#00BCD4", // Teal accent color
              light: "#4DD0E1",
              dark: "#0097A7",
              contrastText: "#FFFFFF",
            },
            secondary: {
              main: "#FFC107", // Amber for secondary actions/highlights
              light: "#FFD54F",
              dark: "#FFA000",
              contrastText: "#212121",
            },
            error: {
              main: "#EF5350",
            },
            warning: {
              main: "#FF9800",
            },
            info: {
              main: "#2196F3",
            },
            success: {
              main: "#4CAF50",
            },
            background: {
              default: "#1A202C", // Very dark blue-grey for main background
              paper: "#2D3748", // Slightly lighter dark blue-grey for cards/surfaces
            },
            text: {
              primary: "#FFFFFF", // White text
              secondary: "#A0AEC0", // Light grey text for secondary info
              disabled: "#6B7280",
            },
            divider: "#6B7280", // Darker grey for dividers
          }),
    },
  };
};
