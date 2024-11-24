import { create } from "zustand";

/**
 * @typedef {{
 * administrators: string[];
 * setAdministrators: (administrators: string[]) => void;
 * }} AdministratorsStore
 * 
 * @type {import("zustand").UseBoundStore<import("zustand").StoreApi<AdministratorsStore>>}
 */
export const useAdministrators = create((set) => ({
  administrators: ["kizilkartalhd@gmail.com"],
  setAdministrators: (administrators) => set({ administrators }),
}));