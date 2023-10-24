import { useResetNavigate } from "@/features/focus-navigate";
import { ROUTES } from "@/shared/constants/routes";
import { useVideoStore } from "@/shared/store/use-video-store";
import { QRCode } from "@/shared/ui/icons";
import { HomeLayout } from "@/shared/ui/layouts/home-layout";
import { HomeOkButton } from "@/widgets/home-ok-button";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function HomePage() {
  const [isShowBanner, setIsShowBanner] = useState<boolean>(false);
  const router = useRouter();

  const currentTime = useVideoStore((state) => state.currentTime);

  useEffect(() => {
    if (currentTime >= 5) {
      setIsShowBanner(true);
    }
  }, [currentTime]);

  useResetNavigate();

  return (
    <HomeLayout
      isShowBanner={isShowBanner}
      qr={<QRCode />}
      button={
        <HomeOkButton
          focusId={0}
          props={{
            className: "w-full",
            onClick: () => router.push(ROUTES.PHONE),
          }}
        >
          ОК
        </HomeOkButton>
      }
    />
  );
}
