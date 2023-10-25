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
import { useFocusableElementHandlers } from "../model/use-focusable-element-handlers";
import { useFocusObserve } from "../model/use-focus-observe";

export type VectorMoves = {
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

    const { handleClick, handleKeydown } = useFocusableElementHandlers({
      ref,
      props,
      moves,
      id,
      isEntered,
    });

    useFocusObserve({
      ref,
      id,
      handleClick,
      handleKeydown,
    });

    return <Component {...props} ref={ref} />;
  };

  return FocusableComponent;
}
