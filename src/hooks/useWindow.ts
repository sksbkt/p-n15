import { RootState } from "@/store";
import { setIsScrolled as setIsScrolledStore } from "@/store/widowSlice";
import { useDispatch, useSelector } from "react-redux";

export const useWindow = () => {
  const dispatch = useDispatch();
  const isScrolled = useSelector(
    (state: RootState) => state.widowHelper.isScrolled as boolean
  );
  const setIsScrolled = (val: boolean): void => {
    dispatch(setIsScrolledStore(val));
  };
  return { isScrolled, setIsScrolled };
};
