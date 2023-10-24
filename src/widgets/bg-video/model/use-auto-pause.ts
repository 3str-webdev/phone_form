import { ROUTES } from "@/shared/constants/routes";
import { useVideoStore } from "@/shared/store/use-video-store";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function useAutoPause() {
  const pathname = usePathname();
  const { play, pause } = useVideoStore((state) => ({
    play: state.play,
    pause: state.pause,
  }));

  useEffect(() => {
    if (pathname !== ROUTES.HOME) {
      pause();
    } else {
      play();
    }
  }, [pathname, pause, play]);
}
