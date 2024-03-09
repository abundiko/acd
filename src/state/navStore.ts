import { create } from "zustand";

type NavState = {
  isOpen: boolean;
  setOpen: (v: boolean) => void;
};

export const useNavState = create<NavState>(set => ({
  isOpen: false,
  setOpen: (isOpen: boolean) => {
    set(state => ({ isOpen }));
  }
}));
