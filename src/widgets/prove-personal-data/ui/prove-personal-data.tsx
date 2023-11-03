import {
  RegisterFocusableComponent,
  RegisterFocusableComponentProps,
} from "@/features/focus-navigate";
import { UICheckbox, UICheckboxProps } from "@/shared/ui";
import clsx from "clsx";
import { forwardRef } from "react";

type ProvePersonalDataProps = UICheckboxProps;

export const ProvePersonalDataComponent = forwardRef<
  HTMLLabelElement,
  ProvePersonalDataProps
>(function Prove({ children, ...props }, ref) {
  return (
    <label
      ref={ref}
      onClick={() => props.onChange(!props.checked)}
      className={clsx(
        "flex items-center gap-[10px] cursor-pointer outline-none",
        "focus:outline-2 focus:outline-main-2"
      )}
      tabIndex={0}
    >
      <div className="px-[10px] py-[6px]">
        <UICheckbox {...props} />
      </div>
      <p className="text-subtext text-subline-1">{children}</p>
    </label>
  );
});

export function ProvePersonalData({
  component = ProvePersonalDataComponent,
  ...otherProps
}: RegisterFocusableComponentProps<ProvePersonalDataProps>) {
  return <RegisterFocusableComponent component={component} {...otherProps} />;
}
