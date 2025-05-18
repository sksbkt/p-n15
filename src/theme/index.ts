// import { getPalette } from "@/theme/palettes";
// import { createTheme, PaletteMode } from "@mui/material";
// import { useMemo } from "react";

import { getDesignToken } from "@/theme/palettes";
import { createTheme, PaletteMode } from "@mui/material";
import { useMemo } from "react";

export const useAppTheme = (mode: PaletteMode) => {
  const theme = useMemo(() => createTheme(getDesignToken(mode)), [mode]);
  return theme;
};

// const theme = extendTheme({
//   colorSchemes: {
//     light: getDesignToken("light"),
//     dark: getDesignToken("dark"),
//   },
//   components: { MuiButton: { defaultProps: { disableElevation: true } } },
// });

// const theme = (mode: PaletteMode) => createTheme(getDesignToken(mode));
// export default theme;
