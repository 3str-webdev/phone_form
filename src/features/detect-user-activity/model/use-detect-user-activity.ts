import { useEffect } from "react";

export function useDetectUserActivity(cb: () => void) {
  useEffect(() => {
    window.addEventListener("keydown", cb);
    window.addEventListener("click", cb);

    return () => {
      window.removeEventListener("keydown", cb);
      window.removeEventListener("click", cb);
    };
  }, [cb]);
}
