import { Banner } from "@/entities/show-banner";
import { useVideoStore } from "@/shared/store/use-video-store";
import { VideoLayout } from "@/widgets/bg-video";
import { BgVideo } from "@/widgets/bg-video/ui/bg-video";
import { useEffect, useState } from "react";

export function HomePage() {
  const [isShowBanner, setIsShowBanner] = useState<boolean>(false);
  const currentTime = useVideoStore((state) => state.currentTime);

  useEffect(() => {
    if (!isShowBanner && currentTime >= 5) {
      setIsShowBanner(true);
    }
  }, [currentTime, isShowBanner]);

  return (
    <VideoLayout>
      <BgVideo />
      {isShowBanner && (
        <Banner className="absolute top-[50%] right-0 translate-y-[-50%]" />
      )}
    </VideoLayout>
  );
}
