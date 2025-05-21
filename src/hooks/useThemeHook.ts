import { RootState } from "@/store";
import { Direction } from "@/types";
import { PaletteMode } from "@mui/material";
import { useSelector } from "react-redux";

export const useThemeMode = () => {
  const mode = useSelector(
    (state: RootState) => state.theme.mode as PaletteMode
  );
  const direction = useSelector(
    (state: RootState) => state.theme.direction as Direction
  );
  return { mode, direction };
};
