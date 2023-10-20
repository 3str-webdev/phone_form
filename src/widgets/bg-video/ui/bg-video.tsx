import { UIPageLoader, UIVideoPlayer } from "@/shared/ui";
import { useBgVideo } from "../model/use-bg-video";
import { useVideoStore } from "@/shared/store/use-video-store";

export function BgVideo() {
  const { isLoading, videoRef, handleVideoLoadComplete } = useBgVideo();

  const setCurrentTime = useVideoStore((state) => state.setCurrentTime);

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
        className={videoCLassName}
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
