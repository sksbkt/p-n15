import { getDesignToken } from "@/theme/palettes";
import {
  createTheme,
  // extendTheme,
  // PaletteMode,
} from "@mui/material";
// import { useMemo } from "react";

// export const useAppTheme = (mode: PaletteMode) => {
//   const theme = useMemo(() => createTheme(getDesignToken(mode)), [mode]);
//   return theme;
// };

const theme = createTheme({
  colorSchemes: {
    light: getDesignToken("light"),
    dark: getDesignToken("dark"),
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          transition: "all 0.3s ease-in-out", // Smooth transition for size and position changes
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Subtle shadow for depth
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
  },
});
// const theme = (mode: PaletteMode) => createTheme(getDesignToken(mode));
export default theme;
