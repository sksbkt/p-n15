import { PaletteMode } from "@mui/material";

interface ColorSystemOptions {
  palette: {
    mode: PaletteMode;
    primary?: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    secondary?: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    error?: { main: string };
    warning?: { main: string };
    info?: { main: string };
    success?: { main: string };
    background?: {
      default: string;
      paper: string;
    };
    text?: {
      primary: string;
      secondary: string;
      disabled: string;
    };
    divider?: string;
  };
}

// Define colors that are common to both light and dark modes,
// such as accent colors and status colors, as these often remain consistent.
const commonColors = {
  primary: {
    main: "#00BCD4", // Teal accent color, prominent in the image (e.g., logo, links)
    light: "#4DD0E1",
    dark: "#0097A7",
    contrastText: "#FFFFFF", // White text on Teal
  },
  secondary: {
    main: "#FFC107", // Amber for secondary actions/highlights, subtle in the image
    light: "#FFD54F",
    dark: "#FFA000",
    contrastText: "#212121", // Dark text on amber
  },

  error: {
    main: "#EF5350", // Red for errors
  },
  warning: {
    main: "#FF9800", // Orange for warnings
  },
  info: {
    main: "#2196F3", // Blue for informational messages
  },
  success: {
    main: "#4CAF50", // Green for success messages
  },
};

export const getDesignToken = (mode: PaletteMode): ColorSystemOptions => {
  return {
    palette: {
      mode,
      ...commonColors, // Spread common colors first

      ...(mode === "light"
        ? {
            // Light mode specific colors, derived to complement the dark image
            background: {
              default: "#F7FAFC", // Very light grey/off-white for main background
              paper: "#FFFFFF", // Pure white for cards/surfaces
            },
            text: {
              primary: "#2D3748", // Dark blue-grey text
              secondary: "#4A5568", // Medium grey text for secondary info
              disabled: "#A0AEC0", // Lighter grey for disabled elements
            },
            divider: "#E2E8F0", // Light grey for dividers
          }
        : {
            // Dark mode specific colors, extracted directly from the provided image
            background: {
              default: "#1A202C", // Very dark blue-grey for main background
              paper: "#2D3748", // Slightly lighter dark blue-grey for cards/surfaces
            },
            text: {
              primary: "#FFFFFF", // White text
              secondary: "#A0AEC0", // Light grey text for secondary info
              disabled: "#6B7280", // Darker grey for disabled elements
            },
            divider: "#6B7280", // Darker grey for dividers
          }),
    },
  };
};
// src/theme/palettes.ts (or similar file where getDesignToken and typographyOptions are defined)

// If you have existing common typography options, they would be here:
export const typographyOptions = {
  fontFamily: "Inter, sans-serif",
  h1: { fontSize: "3rem", fontWeight: 700 },
  h2: { fontSize: "2.5rem", fontWeight: 600 },
  // ... other typography variants
};

// This is the commonComponents object that needs to be exported.
// It should contain default style overrides for Material-UI components
// that are consistent across both light and dark modes, or simply serve
// as a base to be extended by mode-specific overrides.
export const commonComponents = {
  // Example: General MuiCard styles that don't depend on mode
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: "12px", // Consistent rounded corners for cards
        // Add other common card styles here
      },
    },
  },
  // Example: General MuiPaper styles
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: "8px", // Consistent rounded corners for papers
        // Add other common paper styles here
      },
    },
  },
  // Example: General MuiLink styles
  MuiLink: {
    styleOverrides: {
      root: {
        textDecoration: "none", // Remove default underline
        "&:hover": {
          textDecoration: "underline", // Add underline on hover
        },
      },
    },
  },

  // Add more common component overrides here as needed
};

// Your getDesignToken function would also be in this file
// (as provided in our previous conversation, with its interface definition)
// For brevity, it's omitted here but assumed to be present.
/*
import { PaletteMode } from "@mui/material";

interface ColorSystemOptions {
  // ... (interface definition)
}

const commonColors = {
  // ... (commonColors definition)
};

export const getDesignToken = (mode: PaletteMode): ColorSystemOptions => {
  // ... (implementation using commonColors and mode-specific palettes)
};
*/
