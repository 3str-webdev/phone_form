import { useEffect } from "react";
import { useFocusableStore } from "./use-focusable-store";

export function useResetNavigate() {
  const setCurrentId = useFocusableStore((state) => state.setCurrentId);

  useEffect(() => {
    setCurrentId(0);
  }, [setCurrentId]);
}
