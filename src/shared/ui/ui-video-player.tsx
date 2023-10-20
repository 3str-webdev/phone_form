import { VideoHTMLAttributes, useEffect, useRef } from "react";

export type UIVideoPlayerProps = VideoHTMLAttributes<HTMLVideoElement> & {
  onLoadComplete: () => void;
};

export function UIVideoPlayer({
  autoPlay,
  onLoadComplete,
  ...props
}: UIVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!(videoRef && videoRef.current)) {
      return;
    }

    const video = videoRef.current;
    if (video.readyState >= video.HAVE_FUTURE_DATA) {
      onLoadComplete();
    }
  }, [onLoadComplete]);

  useEffect(() => {
    if (autoPlay && videoRef && videoRef.current) {
      videoRef.current.play().catch(() => {
        console.error("Ошибка при воспроизведении видео");
      });
    }
  }, [autoPlay]);

  return <video {...props} autoPlay={autoPlay} ref={videoRef}></video>;
}
