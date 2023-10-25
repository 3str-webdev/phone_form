import clsx from "clsx";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { UILoader } from ".";

export type UIButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "fill" | "outlined";
  isLoading?: boolean;
};

export const UIButton = forwardRef<HTMLButtonElement, UIButtonProps>(
  function Button(
    {
      variant = "fill",
      className,
      disabled,
      isLoading = false,
      children,
      ...props
    },
    ref
  ) {
    const content = isLoading ? <UILoader /> : children;

    return (
      <button
        {...props}
        ref={ref}
        disabled={disabled}
        className={clsx(
          className,
          "h-[52px] transition-colors text-text outline-none grid place-items-center",
          {
            fill: clsx("bg-main-2 text-contrast", "focus:text-main-1"),

            outlined: clsx(
              "border-2 border-main-2 outline-none",
              !disabled && "hover:bg-main-2 hover:text-contrast",
              "disabled:text-disabled-1 disabled:border-disabled-1 disabled:cursor-not-allowed",
              "focus:bg-main-2 focus:text-contrast focus:transition-none"
            ),
          }[variant]
        )}
      >
        {content}
      </button>
    );
  }
);
