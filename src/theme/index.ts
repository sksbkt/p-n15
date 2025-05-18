// import { getPalette } from "@/theme/palettes";
// import { createTheme, PaletteMode } from "@mui/material";
// import { useMemo } from "react";

import { getDesignToken } from "@/theme/palettes";
import { extendTheme } from "@mui/material";

// export const useAppTheme = (mode: PaletteMode) => {
//   const theme = useMemo(
//     () => createTheme({ palette: getPalette(mode) }),
//     [mode]
//   );
//   return theme;
// };

const theme = extendTheme({
  colorSchemes: {
    light: getDesignToken("light"),
    dark: getDesignToken("dark"),
  },
  components: { MuiButton: { defaultProps: { disableElevation: true } } },
});

export default theme;
