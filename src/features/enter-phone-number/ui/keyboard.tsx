import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";

type KeyboardProps = Omit<HTMLAttributes<HTMLDivElement>, "onChange"> & {
  keys: ReactNode;
};

export function Keyboard({ className, keys }: KeyboardProps) {
  return (
    <div
      tabIndex={0}
      className={clsx(className, "grid grid-cols-3 grid-rows-4 gap-[10px]")}
    >
      {keys}
    </div>
  );
}
