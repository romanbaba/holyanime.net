import { create } from "zustand";

/**
 * @typedef {{
 * isAuthenticating: boolean;
 * setAuthenticating: (isAuthenticating: boolean) => void;
 * }} AuthenticatingStore
 * 
 * @type {import("zustand").UseBoundStore<import("zustand").StoreApi<AuthenticatingStore>>}
 */
export const useAuthenticating = create((set) => ({
  isAuthenticating: false,
  setAuthenticating: (isAuthenticating) => set({ isAuthenticating }),
}));