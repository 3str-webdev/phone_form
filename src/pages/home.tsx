import { useResetNavigate } from "@/features/focus-navigate";
import { useShowHomeBannerStore } from "@/features/show-home-banner";
import { ROUTES } from "@/shared/constants/routes";
import { QRCode } from "@/shared/ui/icons";
import { HomeLayout } from "@/shared/ui/layouts/home-layout";
import { HomeOkButton } from "@/widgets/home-ok-button";
import { useRouter } from "next/router";

export function HomePage() {
  const router = useRouter();

  const isShowBanner = useShowHomeBannerStore((state) => state.isShowBanner);

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
