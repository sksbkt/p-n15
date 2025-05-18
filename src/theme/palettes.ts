import { ColorSystemOptions, PaletteMode } from "@mui/material";
const commonPalette = {
  primary: {
    main: "#1976d2",
    light: "#63a4ff",
    dark: "#004ba0",
    contrastText: "#fff",
  },
  secondary: {
    main: "#9c27b0",
    light: "#d05ce3",
    dark: "#6a0080",
    contrastText: "#fff",
  },
};
// export const getPalette = (mode: PaletteMode) => ({
//   mode,
//   ...commonPalette,
//   ...(mode === "light" ? {} : {}),
// });

export const getDesignToken = (mode: PaletteMode): ColorSystemOptions => {
  return {
    palette: {
      ...commonPalette,
      mode,
      ...(mode === "light"
        ? {
            primary: { main: "#1976d2" }, // Example light primary
            secondary: { main: "#9c27b0" }, // Example light secondary
            background: {
              default: "#fff",
              paper: "#fff",
            },
            text: {
              primary: "rgba(0, 0, 0, 0.87)",
              secondary: "rgba(0, 0, 0, 0.6)",
            },
            // ... other light mode specific colors
          }
        : {
            primary: { main: "#90caf9" }, // Example dark primary
            secondary: { main: "#ce93d8" }, // Example dark secondary
            background: {
              default: "#121212",
              paper: "#1e1e1e",
            },
            text: {
              primary: "#fff",
              secondary: "rgba(255, 255, 255, 0.7)",
            },
          }),
    },
  };
};
