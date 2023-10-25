import { create } from "zustand";

type UseShowHomeBannerStore = {
  isShowBanner: boolean;
  setIsShowBanner: (value: boolean) => void;
};

export const useShowHomeBannerStore = create<UseShowHomeBannerStore>((set) => ({
  isShowBanner: false,
  setIsShowBanner: (value) => set({ isShowBanner: value }),
}));
