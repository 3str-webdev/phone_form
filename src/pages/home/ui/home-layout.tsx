import clsx from "clsx";
import { ReactNode } from "react";

import styles from "../animations/animations.module.css";

type HomeLayoutProps = {
  qr: ReactNode;
  button: ReactNode;
  isShowBanner: boolean;
};

export function HomeLayout({ qr, button, isShowBanner }: HomeLayoutProps) {
  if (!isShowBanner) {
    return null;
  }

  return (
    <aside
      className={clsx(
        styles.home_banner_animate,
        "top-[50%] -translate-y-[50%] absolute right-0",
        "pt-5 pb-[10px] px-[10px]",
        "flex flex-col items-center gap-5 bg-main-1"
      )}
    >
      <h1 className="text-text max-w-[231px] text-center uppercase">
        Исполните мечту вашего Вандама!
        <br /> Подарите ему машину!
      </h1>

      <div className="flex flex-col gap-5 max-w-[126px]">
        {qr}
        <p className="text-subtext text-center">
          Сканируйте&nbsp;QR&#8209;код или нажмите ОК
        </p>
      </div>

      <div className="w-full max-w-[156px]">{button}</div>
    </aside>
  );
}
