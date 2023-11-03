import { MutableRefObject, useEffect } from "react";
import { useFocusableStore } from "./use-focusable-store";

type UseFocusObserve = {
  ref: MutableRefObject<HTMLElement | null>;
  focusId: number;
  handleClick: (e: MouseEvent) => void;
  handleKeydown: (e: KeyboardEvent) => void;
};

export function useFocusObserve({
  ref,
  focusId,
  handleClick,
  handleKeydown,
}: UseFocusObserve) {
  const { currentIndex, elems, addElem, deleteElem } = useFocusableStore();

  useEffect(() => {
    if (!ref.current) return;

    if (focusId !== elems[currentIndex]) return;

    ref.current.focus();
  }, [currentIndex, elems, focusId, ref]);

  useEffect(() => {
    addElem(focusId);

    const element = ref.current;

    if (element) {
      element.addEventListener("keydown", handleKeydown);
      element.addEventListener("click", handleClick);
    }

    return () => {
      deleteElem(focusId);
      if (element) {
        element.removeEventListener("keydown", handleKeydown);
        element.removeEventListener("click", handleClick);
      }
    };
  }, [addElem, deleteElem, handleClick, handleKeydown, focusId, ref]);
}
