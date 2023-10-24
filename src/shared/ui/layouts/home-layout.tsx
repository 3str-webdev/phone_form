import { ReactNode } from "react";

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
    <aside className="absolute top-[50%] right-0 pt-5 pb-[10px] px-[10px] flex flex-col items-center gap-5 -translate-y-[50%] bg-main-1">
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
