import { RootState } from "@/store";
import {
  setThemeDirection,
  // toggleThemeMode as sliceToggleThemeMode,
} from "@/store/themeSlice";
import { Direction } from "@/types";
// import { PaletteMode } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export const useThemeMode = () => {
  const dispatch = useDispatch();
  // const mode = useSelector(
  //   (state: RootState) => state.theme.mode as PaletteMode
  // );
  // const toggleThemeMode = (): void => {
  //   dispatch(sliceToggleThemeMode());
  // };
  const direction = useSelector(
    (state: RootState) => state.theme.direction as Direction
  );
  const setDirection = (val: Direction): void => {
    dispatch(setThemeDirection(val));
  };
  return {
    setDirection,
    direction,
    // mode, toggleThemeMode
  };
};
