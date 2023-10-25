import { MutableRefObject, useEffect } from "react";
import { useFocusableStore } from "./use-focusable-store";

type UseFocusObserve = {
  ref: MutableRefObject<HTMLElement | null>;
  id: number;
  handleClick: (e: MouseEvent) => void;
  handleKeydown: (e: KeyboardEvent) => void;
};

export function useFocusObserve({
  ref,
  id,
  handleClick,
  handleKeydown,
}: UseFocusObserve) {
  const { currentId, elems, addElem, deleteElem } = useFocusableStore();

  useEffect(() => {
    if (!ref.current) return;

    if (id !== elems[currentId]) return;

    ref.current.focus();
  }, [currentId, elems, id, ref]);

  useEffect(() => {
    addElem(id);

    const element = ref.current;

    if (element) {
      element.addEventListener("keydown", handleKeydown);
      element.addEventListener("click", handleClick);
    }

    return () => {
      deleteElem(id);
      if (element) {
        element.removeEventListener("keydown", handleKeydown);
        element.removeEventListener("click", handleClick);
      }
    };
  }, [addElem, deleteElem, handleClick, handleKeydown, id, ref]);
}
