import { create } from "zustand";

type UseVideoStore = {
  isPlaying: boolean;
  currentTime: number;
  play: () => void;
  pause: () => void;
  setCurrentTime: (time: number) => void;
};

export const useVideoStore = create<UseVideoStore>((set) => ({
  isPlaying: true,
  currentTime: 0,
  play: () => set({ isPlaying: true }),
  pause: () => set({ isPlaying: false }),
  setCurrentTime: (time) => set({ currentTime: time }),
}));
