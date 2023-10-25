import { useNow } from "@/entities/timer";
import clsx from "clsx";
import { HTMLAttributes, useEffect, useRef, useState } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

type InactionTimerProps = HTMLAttributes<HTMLSpanElement> & {
  seconds: number;
  onFinish: () => void;
  startedAt: number;
  childrenProps?: HTMLAttributes<HTMLDivElement>;
};

export function InactionTimer({
  seconds,
  onFinish,
  startedAt,
  childrenProps,
  ...props
}: InactionTimerProps) {
  const now = useNow(10, true);

  const passingTime = now - startedAt; // ms3
  const passingSeconds = Math.floor(passingTime / 1000); // s
  const countDown = Math.max(0, seconds - passingSeconds); // s
  const isFinish = passingSeconds >= seconds;

  useEffect(() => {
    if (isFinish) {
      onFinish();
    }
  }, [onFinish, isFinish]);

  return (
    <span {...props}>
      <CircularProgressbarWithChildren
        value={(passingTime / 1000) * 10}
        maxValue={seconds * 10}
        styles={buildStyles({
          pathTransition: "none",
          pathColor: "black",
        })}
      >
        <div {...childrenProps}>{countDown}</div>
      </CircularProgressbarWithChildren>
    </span>
  );
}
