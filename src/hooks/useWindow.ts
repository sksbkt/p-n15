import { RootState } from "@/store";
import { useSelector } from "react-redux";

export const useWindow = () => {
  const isScrolled = useSelector(
    (state: RootState) => state.widowHelper.isScrolled as boolean
  );
  return { isScrolled };
};
