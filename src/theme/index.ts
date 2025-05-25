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
  cssVariables: {
    colorSchemeSelector: "class",
  },
  components: {},
});
// const theme = (mode: PaletteMode) => createTheme(getDesignToken(mode));
export default theme;
