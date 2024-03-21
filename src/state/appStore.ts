import { NIGERIAN_STATES } from "@/utils/constants";
import { create } from "zustand";

type AppState = {
  locations: string[];
  setLocations: (v: string[]) => void;
  categories: string[];
  setCategories: (v: string[]) => void;
};

export const useAppState = create<AppState>(set => ({
  locations: NIGERIAN_STATES,
  categories: [],
  setLocations: (locations: string[]) => {
    set(state => ({ ...state, locations }));
  },
  setCategories: (categories: string[]) => {
    set(state => ({ ...state, categories }));
  }
}));
