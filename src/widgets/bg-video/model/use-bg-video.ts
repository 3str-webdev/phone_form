import { useVideoStore } from "@/entities/video/use-video-store";
import { useEffect, useRef, useState } from "react";

export function useBgVideo() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const isPlaying = useVideoStore((state) => state.isPlaying);

  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoLoadComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    if (videoRef && videoRef.current) {
      const video = videoRef.current;

      video.play().catch(() => {
        console.error("Ошибка при воспроизведении видео");
      });

      if (video.readyState >= video.HAVE_FUTURE_DATA) {
        handleVideoLoadComplete();
      }
    }
  }, []);

  useEffect(() => {
    if (!(videoRef && videoRef.current)) {
      return;
    }

    const video = videoRef.current;

    if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }, [isPlaying]);

  return { isLoading, videoRef, handleVideoLoadComplete };
}
