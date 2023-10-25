import { useVideoStore } from "@/entities/video/use-video-store";
import {
  useObserveVideoTime,
  useShowHomeBannerStore,
} from "@/features/show-home-banner";
import { UIPageLoader, UIVideoPlayer } from "@/shared/ui";
import clsx from "clsx";
import { useAutoPause } from "../model/use-auto-pause";
import { useBgVideo } from "../model/use-bg-video";

export function BgVideo() {
  const { isLoading, videoRef, handleVideoLoadComplete } = useBgVideo();

  const setCurrentTime = useVideoStore((state) => state.setCurrentTime);
  const setIsShowBanner = useShowHomeBannerStore(
    (state) => state.setIsShowBanner
  );

  useObserveVideoTime(5, setIsShowBanner);
  useAutoPause();

  const videoCLassName = isLoading ? "hidden" : "";

  const handleCurrentTimeUpdate = () => {
    if (videoRef && videoRef.current) {
      setCurrentTime(Math.floor(videoRef.current.currentTime));
    }
  };

  return (
    <>
      {isLoading && <UIPageLoader />}

      <UIVideoPlayer
        className={clsx(
          videoCLassName,
          "absolute top-0 left-0 right-0 bottom-0"
        )}
        src="/bg-video.mp4"
        autoPlay
        muted
        loop
        preload="metadata"
        ref={videoRef}
        onCanPlay={handleVideoLoadComplete}
        onTimeUpdate={handleCurrentTimeUpdate}
      />
    </>
  );
}
