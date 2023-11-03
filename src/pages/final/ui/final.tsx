import { useResetNavigate } from "@/features/focus-navigate";
import { FinalLayout } from "@/pages/final/ui/final-layout";
import { ROUTES } from "@/shared/constants/routes";
import { CloseButton } from "@/widgets/close-button";
import { QrCodeInfo } from "@/widgets/qr-code-info";

export function FinalPage() {
  useResetNavigate();

  return (
    <FinalLayout
      closeButton={<CloseButton href={ROUTES.HOME} focusId={0} />}
      qrCodeInfo={<QrCodeInfo className="absolute right-10 bottom-10" />}
    />
  );
}
