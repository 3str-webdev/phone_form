import { useEffect } from "react";
import { useFocusableStore } from "..";

export function useResetNavigate() {
  const setCurrentId = useFocusableStore((state) => state.setCurrentId);

  useEffect(() => {
    setCurrentId(0);
  }, [setCurrentId]);
}
