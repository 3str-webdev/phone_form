import { VideoHTMLAttributes, forwardRef } from "react";

export type UIVideoPlayerProps = VideoHTMLAttributes<HTMLVideoElement>;

export const UIVideoPlayer = forwardRef<HTMLVideoElement, UIVideoPlayerProps>(
  function VideoPlayer({ ...props }, ref) {
    return <video {...props} ref={ref}></video>;
  }
);
