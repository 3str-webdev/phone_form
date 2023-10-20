import { useEffect, useRef, useState } from "react";

export function useBgVideo() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

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

  return { isLoading, videoRef, handleVideoLoadComplete };
}
