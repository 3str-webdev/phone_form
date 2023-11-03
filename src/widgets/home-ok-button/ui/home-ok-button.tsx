import {
  RegisterFocusableComponent,
  RegisterFocusableComponentProps,
} from "@/features/focus-navigate";
import { UIButton, UIButtonProps } from "@/shared/ui";

export function HomeOkButton({
  component = UIButton,
  ...otherProps
}: RegisterFocusableComponentProps<UIButtonProps>) {
  return <RegisterFocusableComponent component={component} {...otherProps} />;
}
