import { useResetNavigate } from "@/features/focus-navigate";
import { ROUTES } from "@/shared/constants/routes";
import { FinalLayout } from "@/pages/final/ui/final-layout";
import { CloseButton } from "@/widgets/close-button";
import { QrCodeInfo } from "@/widgets/qr-code-info";

export function FinalPage() {
  useResetNavigate();

  return (
    <FinalLayout
      closeButton={<CloseButton focusId={0} props={{ href: ROUTES.HOME }} />}
      qrCodeInfo={<QrCodeInfo className="absolute right-10 bottom-10" />}
    />
  );
}
