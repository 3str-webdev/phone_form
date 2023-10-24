import { create } from "zustand";

type UseKeyboardStore = {
  focusedKeyIndex: number | null;
  setFocusedKeyIndex: (index: number) => void;
};

export const useKeyboardStore = create<UseKeyboardStore>((set) => ({
  focusedKeyIndex: null,
  setFocusedKeyIndex: (index) => set({ focusedKeyIndex: index }),
}));
