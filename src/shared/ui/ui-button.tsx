import clsx from "clsx";
import { ButtonHTMLAttributes, forwardRef } from "react";

export type UIButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "fill" | "outlined";
};

export const UIButton = forwardRef<HTMLButtonElement, UIButtonProps>(
  function Button({ variant = "fill", className, disabled, ...props }, ref) {
    return (
      <button
        {...props}
        ref={ref}
        disabled={disabled}
        className={clsx(
          className,
          "h-[52px] transition-colors text-text",
          {
            fill: "bg-main-2 text-contrast",
            outlined: clsx(
              "border-2 border-main-2 outline-none",
              !disabled && "hover:bg-main-2 hover:text-contrast",
              "disabled:text-disabled-1 disabled:border-disabled-1 disabled:cursor-not-allowed",
              "focus:bg-main-2 focus:text-contrast focus:transition-none"
            ),
          }[variant]
        )}
      />
    );
  }
);
