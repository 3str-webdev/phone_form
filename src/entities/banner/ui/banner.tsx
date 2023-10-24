import { UIButton } from "@/shared/ui";
import clsx from "clsx";
import Image from "next/image";
import { HTMLAttributes } from "react";
import homeSvg from "/public/home-qr.svg";
import Link from "next/link";
import { ROUTES } from "@/shared/constants/routes";

type BannerProps = HTMLAttributes<HTMLElement>;

export function Banner({ className, ...props }: BannerProps) {
  return (
    <aside
      className={clsx(
        className,
        "pt-5 pb-[10px] px-[10px] flex flex-col items-center gap-5 bg-main-1"
      )}
    >
      <h2 className="text-text max-w-[231px] text-center">
        ИСПОЛНИТЕ МЕЧТУ ВАШЕГО ВАНДАМА!
        <br /> ПОДАРИТЕ ЕМУ МАШИНУ!
      </h2>

      <div className="flex flex-col gap-5 max-w-[126px]">
        <Image src={homeSvg} width={126} height={126} alt="QRcode" />
        <p className="text-subtext text-center">
          Сканируйте&nbsp;QR&#8209;код или нажмите ОК
        </p>
      </div>

      <Link className="w-full max-w-[156px]" href={ROUTES.PHONE}>
        <UIButton className="text-main-1 w-full max-w-[156px]">ОК</UIButton>
      </Link>
    </aside>
  );
}
