import { UIPageLoader, UIVideoPlayer } from "@/shared/ui";
import { VideoLayout } from "@/widgets/bg-video";
import { useState } from "react";

export function HomePage() {
  const [isLoadingPage, setIsLoadingPage] = useState<boolean>(true);

  const videoCLassName = isLoadingPage ? "hidden" : "";

  const handleVideoLoadComplete = () => {
    setIsLoadingPage(false);
  };

  return (
    <VideoLayout>
      {isLoadingPage && <UIPageLoader />}

      <UIVideoPlayer
        className={videoCLassName}
        src="/bg-video.mp4"
        autoPlay
        muted
        loop
        preload="metadata"
        onLoadComplete={handleVideoLoadComplete}
        onCanPlay={handleVideoLoadComplete}
      />
    </VideoLayout>
  );
}
