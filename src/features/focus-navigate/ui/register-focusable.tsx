import { ComponentType, HTMLAttributes, useRef } from "react";
import { MOVES } from "../constants";
import { useFocusObserve } from "../model/use-focus-observe";
import { useFocusableElementHandlers } from "../model/use-focusable-element-handlers";

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
  focusId: number,
  moves: VectorMoves = MOVES.DEFAULT,
  isEntered = false
) {
  const FocusableComponent = (props: P) => {
    const ref = useRef<HTMLElement | null>(null);

    const { handleClick, handleKeydown } = useFocusableElementHandlers({
      ref,
      props,
      moves,
      focusId: focusId,
      isEntered,
    });

    useFocusObserve({
      ref,
      focusId: focusId,
      handleClick,
      handleKeydown,
    });

    return <Component {...props} ref={ref} />;
  };

  return FocusableComponent;
}
