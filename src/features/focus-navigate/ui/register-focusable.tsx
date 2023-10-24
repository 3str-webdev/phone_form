import { ARROW_KEYS, ENTER } from "@/shared/constants/keys";
import {
  ComponentType,
  HTMLAttributes,
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent as ReactMouseEvent,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { useFocusableStore } from "../model/use-focusable-store";

type VectorMoves = {
  up?: number;
  down?: number;
  left?: number;
  right?: number;
};

export type FocusableElementProps = {
  focusId: number;
  moves?: VectorMoves;
  entered?: boolean;
};

export function registerFocusable<P extends HTMLAttributes<HTMLElement>>(
  Component: ComponentType<P>,
  id: number,
  moves: VectorMoves = { left: -1, right: 1, up: 0, down: 0 },
  isEntered = false
) {
  const FocusableComponent = (props: P) => {
    const ref = useRef<HTMLElement | null>(null);

    const { currentId, setCurrentId, elems, addElem, deleteElem } =
      useFocusableStore();

    useEffect(() => {
      if (!ref.current) return;

      if (id !== elems[currentId]) return;

      ref.current.focus();
    }, [currentId, elems]);

    const handleClick = useCallback(
      (e: MouseEvent) => {
        if (props.onClick) {
          props.onClick(e as unknown as ReactMouseEvent<HTMLElement>);
        }

        if (ref.current) {
          ref.current.focus();
          setCurrentId(id);
        }
      },
      [props, setCurrentId]
    );

    const handleArrowKeydown = useCallback(
      (vector: keyof VectorMoves) => {
        const move = moves[vector];
        if (move !== undefined) {
          const minFocusedId = 0;
          const maxFocusedId = elems.length - 1;
          setCurrentId(
            Math.max(minFocusedId, Math.min(maxFocusedId, currentId + move))
          );
        }
      },
      [currentId, elems.length, setCurrentId]
    );

    const handleKeydown = useCallback(
      (e: KeyboardEvent) => {
        if (props.onKeyDown) {
          props.onKeyDown(e as unknown as ReactKeyboardEvent<HTMLElement>);
        }

        switch (e.key) {
          case ARROW_KEYS.UP:
            handleArrowKeydown("up");
            break;
          case ARROW_KEYS.DOWN:
            handleArrowKeydown("down");
            break;
          case ARROW_KEYS.LEFT:
            handleArrowKeydown("left");
            break;
          case ARROW_KEYS.RIGHT:
            handleArrowKeydown("right");
            break;
        }

        if (e.key === ENTER && isEntered && ref.current) {
          ref.current.click();
        }
      },
      [handleArrowKeydown, props]
    );

    useEffect(() => {
      addElem(id);

      const element = ref.current;

      if (element) {
        element.setAttribute("data-id", String(id));
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
    }, [addElem, deleteElem, handleClick, handleKeydown]);

    return <Component {...props} ref={ref} />;
  };

  return FocusableComponent;
}
