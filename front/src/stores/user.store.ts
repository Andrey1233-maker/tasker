import { create } from "zustand";

export const useUser = create<IUseUser>((set) => ({
  user: null,
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiNjk2NmQzMDktNmRmOS00ZWJhLWI5MzQtM2I1ZTQ4MGQ2ZGI2IiwiaWF0IjoxNzEwOTY0OTM0fQ.y5wSOL3_LXA7kkffUq0efdeH7LvBcRFs8UjoeO3VRwQ",
  setUser: (user: any | null) => set(() => ({ user })),
  setToken: (token: string | null) => set(() => ({ token })),
}));

export interface IUseUser {
  user: any | null;
  token: string | null;
  setUser: (user: any | null) => void;
  setToken: (token: string | null) => void;
}
