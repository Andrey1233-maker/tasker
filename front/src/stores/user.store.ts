import { create } from "zustand";

export const useUser = create<IUseUser>((set) => ({
  user: null,
  token: null,
  setUser: (user: any | null) => set(() => ({ user })),
  setToken: (token: string | null) => set(() => ({ token })),
}));

export interface IUseUser {
  user: any | null;
  token: string | null;
  setUser: (user: any | null) => void;
  setToken: (token: string | null) => void;
}
