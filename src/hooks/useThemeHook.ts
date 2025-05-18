import { RootState } from "@/store";
import { PaletteMode } from "@mui/material";
import { useSelector } from "react-redux";

export const useThemeMode = () => {
  const mode = useSelector(
    (state: RootState) => state.theme.mode as PaletteMode
  );
  return mode;
};
