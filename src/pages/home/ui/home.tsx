import { useResetNavigate } from "@/features/focus-navigate";
import { useShowHomeBannerStore } from "@/features/show-home-banner";
import { ROUTES } from "@/shared/constants/routes";
import { QRCode } from "@/shared/ui/icons";
import { HomeLayout } from "@/pages/home/ui/home-layout";
import { HomeOkButton } from "@/widgets/home-ok-button";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

export function HomePage() {
  const router = useRouter();

  const isShowBanner = useShowHomeBannerStore((state) => state.isShowBanner);

  const handleHomeOkButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    router.push(ROUTES.PHONE);
  };

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
            onClick: handleHomeOkButtonClick,
          }}
          entered={false}
        >
          ОК
        </HomeOkButton>
      }
    />
  );
}
