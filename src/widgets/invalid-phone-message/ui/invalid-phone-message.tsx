import clsx from "clsx";
import { HTMLAttributes } from "react";

type InvalidPhoneMessageProps = HTMLAttributes<HTMLParagraphElement>;

export function InvalidPhoneMessage({
  className,
  ...props
}: InvalidPhoneMessageProps) {
  return (
    <p
      {...props}
      className={clsx(
        className,
        "h-[52px] text-text text-error-1 uppercase text-center"
      )}
    />
  );
}
