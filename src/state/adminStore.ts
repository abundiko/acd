import { ApiAdminUser } from "@/utils/types/userTypes";
import { create } from "zustand";

type AdminState = {
  user: ApiAdminUser | null;
  setUser: (v: ApiAdminUser) => void;
};

export const useAdminState = create<AdminState>(set => ({
  user: null,
  setUser: (user: ApiAdminUser) => {
    set(state => ({ user }));
  }
}));
