import { VideoLayout } from "@/widgets/bg-video";
import { BgVideo } from "@/widgets/bg-video/";
import type { AppProps } from "next/app";

export function App({ Component, pageProps }: AppProps) {
  return (
    <VideoLayout>
      <BgVideo />
      <Component {...pageProps} />
    </VideoLayout>
  );
}
