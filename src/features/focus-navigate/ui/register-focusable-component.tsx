import { ComponentType, HTMLAttributes, ReactNode } from "react";
import { FocusableElementProps, registerFocusable } from "..";

export type RegisterFocusableComponentProps<P> = FocusableElementProps & {
  component?: ComponentType<P>;
  props: P;
  children?: ReactNode;
};

export function RegisterFocusableComponent<
  P extends HTMLAttributes<HTMLElement>
>({
  component,
  focusId,
  moves,
  children,
  props = {} as P,
  entered,
}: RegisterFocusableComponentProps<P>) {
  if (!component) return null;

  props.children = children;

  const FocusableComponent = registerFocusable<P>(
    component,
    focusId,
    moves,
    entered
  );

  return <FocusableComponent {...props} />;
}
