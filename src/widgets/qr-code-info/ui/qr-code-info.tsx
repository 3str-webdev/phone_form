import { QRCode } from "@/shared/ui/icons";
import clsx from "clsx";
import { HTMLAttributes } from "react";

export function QrCodeInfo({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <article
      {...props}
      className={clsx(className, "flex items-center gap-[10px]")}
    >
      <p className="uppercase max-w-[194px] text-right text-text text-white">
        Сканируйте QR-код для получения дополнительной информации
      </p>
      <QRCode className="w-[110px] h-[110px]" />
    </article>
  );
}
