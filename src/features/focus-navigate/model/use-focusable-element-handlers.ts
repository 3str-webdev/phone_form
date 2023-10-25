import { ARROW_KEYS, ENTER } from "@/shared/constants/keys";
import {
  HTMLAttributes,
  MutableRefObject,
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent as ReactMouseEvent,
  useCallback,
} from "react";
import { useFocusableStore } from "..";
import { VectorMoves } from "../ui/register-focusable";

type UseFocusableElementHandlers<P> = {
  id: number;
  props: P;
  moves: VectorMoves;
  ref: MutableRefObject<HTMLElement | null>;
  isEntered: boolean;
};

export function useFocusableElementHandlers<
  P extends HTMLAttributes<HTMLElement>
>({ id, props, moves, ref, isEntered }: UseFocusableElementHandlers<P>) {
  const { currentId, setCurrentId, elems } = useFocusableStore();

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
    [id, props, ref, setCurrentId]
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
    [currentId, elems.length, moves, setCurrentId]
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
    [handleArrowKeydown, isEntered, props, ref]
  );

  return {
    handleClick,
    handleKeydown,
  };
}
