import { ReactNode } from "react";

export function VideoLayout({ children }: { children: ReactNode }) {
  return (
    <main className="w-screen h-screen flex items-center justify-center bg-slate-50">
      <div className="w-full max-w-7xl h-full max-h-[720px] shadow-2xl">
        {children}
      </div>
    </main>
  );
}
