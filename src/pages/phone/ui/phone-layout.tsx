import clsx from "clsx";
import { ReactNode } from "react";

import styles from "../animations/animations.module.css";

type PhoneLayoutProps = {
  closeButton: ReactNode;
  phonePreview: ReactNode;
  keyboard: ReactNode;
  processingPersonalData: ReactNode;
  submitButton: ReactNode;
  inactionTimer: ReactNode;
  qrCodeInfo: ReactNode;
};

export function PhoneLayout({
  closeButton,
  phonePreview,
  keyboard,
  processingPersonalData,
  submitButton,
  inactionTimer,
  qrCodeInfo,
}: PhoneLayoutProps) {
  return (
    <>
      {closeButton}

      <aside
        className={clsx(
          styles.phone_aside_animate,
          "relative bg-main-1 h-full max-w-[380px] py-10 px-6"
        )}
      >
        <article className="absolute -right-1 top-0 px-2 py-2 translate-x-full bg-main-1">
          <div className="w-10 h-10">{inactionTimer}</div>
        </article>

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

      {qrCodeInfo}
    </>
  );
}
