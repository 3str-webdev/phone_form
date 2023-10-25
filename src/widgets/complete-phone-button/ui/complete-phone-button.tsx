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
  props,
  ...otherProps
}: RegisterFocusableComponentProps<CompletePhoneButtonProps>) {
  if (props.disabled) {
    return <CompletePhoneButtonComponent {...props} {...otherProps} />;
  }

  return (
    <RegisterFocusableComponent
      {...otherProps}
      component={component}
      focusId={focusId}
      moves={moves}
      props={props}
    />
  );
}
