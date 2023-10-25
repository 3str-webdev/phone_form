import { create } from "zustand";

type UseVideoStore = {
  isPlaying: boolean;
  play: () => void;
  pause: () => void;

  currentTime: number;
  setCurrentTime: (time: number) => void;
};

export const useVideoStore = create<UseVideoStore>((set) => ({
  isPlaying: true,
  play: () => set({ isPlaying: true }),
  pause: () => set({ isPlaying: false }),

  currentTime: 0,
  setCurrentTime: (time) => set({ currentTime: time }),
}));
