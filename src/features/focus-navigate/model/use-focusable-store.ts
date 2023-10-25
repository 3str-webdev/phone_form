import { create } from "zustand";

type Elem = number;

type UseFocusableStore = {
  currentId: number;
  setCurrentId: (id: number) => void;

  elems: Elem[];
  addElem: (elem: Elem) => void;
  deleteElem: (elem: Elem) => void;
};

export const useFocusableStore = create<UseFocusableStore>((set, get) => ({
  currentId: 0,
  setCurrentId: (id) => set({ currentId: id }),

  elems: [],
  addElem: (value) => {
    const elems = get().elems;
    set({ elems: [...elems, value].sort((a, b) => a - b) });
  },
  deleteElem: (value) => {
    const elems = get().elems;
    set({ elems: elems.filter((v) => v !== value) });
  },
}));
