import { useVideoStore } from "@/entities/video/use-video-store";
import { useEffect } from "react";

export function useObserveVideoTime(
  time: number,
  cb: (isAchieved: boolean) => void
) {
  const currentTime = useVideoStore((state) => state.currentTime);

  useEffect(() => {
    if (currentTime >= time) {
      cb(true);
    }
  }, [cb, currentTime, time]);
}
