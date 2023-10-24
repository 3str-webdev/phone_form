import { ROUTES } from "@/shared/constants/routes";
import Link from "next/link";
import { ReactNode } from "react";
import { UIButton } from "..";
import { CrossIcon } from "../icons";

type PhoneLayoutProps = {
  closeButton: ReactNode;
  phonePreview: ReactNode;
  keyboard: ReactNode;
  processingPersonalData: ReactNode;
  submitButton: ReactNode;
};

export function PhoneLayout({
  closeButton,
  phonePreview,
  keyboard,
  processingPersonalData,
  submitButton,
}: PhoneLayoutProps) {
  return (
    <>
      {closeButton}

      <aside className="relative bg-main-1 h-full max-w-[380px] py-10 px-6">
        <div className="flex flex-col items-center gap-[13px]">
          <h1 className="text-center text-header px-[30px]">
            Введите ваш номер мобильного телефона
          </h1>
          {phonePreview}
          <p className="text-subtext text-center">
            и с Вами свяжется наш менеджер для
            <br /> дальнейшей консультации
          </p>
        </div>

        <div className="px-6">
          <div className="pt-[33px]">{keyboard}</div>
          <div className="pt-[33px]">{processingPersonalData}</div>
          <div className="pt-[13px]">{submitButton}</div>
        </div>
      </aside>
    </>
  );
}
