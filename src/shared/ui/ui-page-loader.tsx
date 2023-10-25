import clsx from "clsx";
import { HTMLAttributes } from "react";
import { UILoader } from "./ui-loader";

export type UIPageLoaderProps = HTMLAttributes<HTMLDivElement>;

export function UIPageLoader({ className, ...props }: UIPageLoaderProps) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        "w-full h-full flex items-center justify-center"
      )}
    >
      <UILoader className="w-14 h-14 text-main-1" />
    </div>
  );
}
