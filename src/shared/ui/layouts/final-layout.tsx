import { ReactNode } from "react";

type FinalLayoutProps = {
  closeButton: ReactNode;
};

export function FinalLayout({ closeButton }: FinalLayoutProps) {
  return (
    <>
      {closeButton}
      <aside className="relative h-full max-w-[380px] px-12 bg-main-1 flex">
        <div className="my-auto flex flex-col gap-[15px]">
          <h1 className="uppercase text-center text-telnumber font-bold">
            Заявка принята
          </h1>
          <p className="text-center text-subtext">
            Держите телефон под рукой. <br />
            Скоро с Вами свяжется наш менеджер.
          </p>
        </div>
      </aside>
    </>
  );
}
