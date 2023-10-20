import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

export type UIButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "fill" | "outlined";
};

export function UIButton({
  variant = "fill",
  className,
  ...props
}: UIButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        className,
        "h-[52px] transition-colors text-text",
        {
          fill: "bg-main-2",
          outlined: clsx(
            "border-2 border-main-2",
            "disabled:text-disabled-1 disabled:bg-disabled-1"
          ),
        }[variant]
      )}
    />
  );
}
