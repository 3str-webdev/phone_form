import {
  RegisterFocusableComponent,
  RegisterFocusableComponentProps,
} from "@/features/focus-navigate";
import { UIButton, UIButtonProps } from "@/shared/ui";
import { forwardRef } from "react";

type CompletePhoneButtonProps = UIButtonProps;

const CompletePhoneButtonComponent = forwardRef<
  HTMLButtonElement,
  CompletePhoneButtonProps
>(function CompleteButton({ disabled, ...props }, ref) {
  const getVariant = (): UIButtonProps["variant"] => {
    if (disabled) {
      return "outlined";
    }
    return "fill";
  };

  return (
    <UIButton
      {...props}
      ref={ref}
      variant={getVariant()}
      disabled={disabled}
      className="w-full uppercase"
    />
  );
});

export function CompletePhoneButton({
  focusId,
  component = CompletePhoneButtonComponent,
  moves,
  ...otherProps
}: RegisterFocusableComponentProps<CompletePhoneButtonProps>) {
  if (otherProps.disabled) {
    return <CompletePhoneButtonComponent {...otherProps} />;
  }

  return (
    <RegisterFocusableComponent
      component={component}
      focusId={focusId}
      moves={moves}
      {...otherProps}
    />
  );
}
