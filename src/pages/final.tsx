import { useResetNavigate } from "@/features/focus-navigate";
import { ROUTES } from "@/shared/constants/routes";
import { FinalLayout } from "@/shared/ui/layouts/final-layout";
import { CloseButton } from "@/widgets/close-button";

export function FinalPage() {
  useResetNavigate();

  return (
    <FinalLayout
      closeButton={<CloseButton focusId={0} props={{ href: ROUTES.HOME }} />}
    />
  );
}
