import { ComponentType, HTMLAttributes } from "react";
import { FocusableElementProps, registerFocusable } from "..";

export type RegisterFocusableComponentProps<P> = FocusableElementProps & {
  component?: ComponentType<P>;
  focusId: number;
} & P;

export function RegisterFocusableComponent<
  P extends HTMLAttributes<HTMLElement>
>({
  component,
  focusId,
  moves,
  entered,
  ...otherProps
}: RegisterFocusableComponentProps<P>) {
  if (!component) return null;

  const FocusableComponent = registerFocusable<P>(
    component,
    focusId,
    moves,
    entered
  );

  const props: P = otherProps as unknown as P;

  return <FocusableComponent {...props} />;
}
