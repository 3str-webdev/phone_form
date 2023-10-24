import {
  RegisterFocusableComponent,
  RegisterFocusableComponentProps,
} from "@/features/focus-navigate";
import { UIButton, UIButtonProps } from "@/shared/ui";

export function HomeOkButton({
  component = UIButton,
  focusId,
  moves,
  props,
  ...otherProps
}: RegisterFocusableComponentProps<UIButtonProps>) {
  return (
    <RegisterFocusableComponent
      component={component}
      focusId={focusId}
      moves={moves}
      props={props}
      {...otherProps}
    />
  );
}
