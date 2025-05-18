import { RootState } from "@/store";
import { useSelector } from "react-redux";

export const useThemeMode = () => {
  const mode = useSelector((state: RootState) => state.theme.mode);
  return mode;
};
