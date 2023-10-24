import clsx from "clsx";
import { InputHTMLAttributes } from "react";
import { CheckIcon } from "./icons";

export type UICheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  onChange: (isChecked: boolean) => void;
};

export function UICheckbox({
  className,
  checked = false,
  onChange,
  ...props
}: UICheckboxProps) {
  const handleChange = () => {
    onChange(!checked);
    console.log("check");
  };

  return (
    <>
      <label
        className={clsx(
          className,
          "overflow-hidden border-2 border-main-2 text-main-2 cursor-pointer",
          "flex items-center justify-center w-10 h-10"
        )}
      >
        <input
          hidden
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          {...props}
        />
        <CheckIcon
          className={clsx(
            "w-6 h-4 transition-all -translate-y-[200%]",
            checked && "translate-y-0"
          )}
        />
      </label>
    </>
  );
}
