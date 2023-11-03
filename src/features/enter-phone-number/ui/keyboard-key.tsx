import {
  FocusableElementProps,
  RegisterFocusableComponent,
  RegisterFocusableComponentProps,
  useFocusableStore,
} from "@/features/focus-navigate";
import { UIButton, UIButtonProps } from "@/shared/ui";
import clsx from "clsx";
import { MouseEvent, forwardRef, useId } from "react";

export type KeyboardKeyType = FocusableElementProps & {
  type: "number" | "erase";
  value: number;
  label: string;
};

type KeyboardKeyProps = UIButtonProps & {
  keyObject: KeyboardKeyType;
};

const KeyboardKeyComponent = forwardRef<HTMLButtonElement, KeyboardKeyProps>(
  function Key({ keyObject, className, onClick, ...props }, ref) {
    const id = useId();

    const setCurrentId = useFocusableStore((state) => state.setCurrentId);

    const handleKeyClick = (e: MouseEvent<HTMLButtonElement>) => {
      setCurrentId(keyObject.focusId);

      if (onClick) {
        onClick(e);
      }
    };

    const keyClassName = keyObject.type === "erase" ? "col-span-2" : "";

    return (
      <UIButton
        {...props}
        ref={ref}
        className={clsx(className, keyClassName)}
        onClick={handleKeyClick}
        key={id}
        variant="outlined"
      />
    );
  }
);

export function KeyboardKey({
  component = KeyboardKeyComponent,
  ...otherProps
}: RegisterFocusableComponentProps<KeyboardKeyProps>) {
  return <RegisterFocusableComponent {...otherProps} component={component} />;
}
