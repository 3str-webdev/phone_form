import { useFocusableStore } from "@/features/focus-navigate";
import { ROUTES } from "@/shared/constants/routes";
import { useVideoStore } from "@/shared/store/use-video-store";
import { VideoLayout } from "@/widgets/bg-video";
import { BgVideo } from "@/widgets/bg-video/";
import type { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function App({ Component, pageProps }: AppProps) {
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

  return (
    <VideoLayout>
      <BgVideo />
      <Component {...pageProps} />
    </VideoLayout>
  );
}
