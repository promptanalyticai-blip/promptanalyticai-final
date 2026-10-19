"use client";

import { create } from "zustand";

export type BlayzitConfig = {
  dnipSensitivity: number;
  adipAutoLevel: number;
  aiAggressiveness: number;
};

type BlayzitConfigState = {
  config: BlayzitConfig;
  updateConfig: (partial: Partial<BlayzitConfig>) => void;
};

export const useBlayzitConfig = create<BlayzitConfigState>((set) => ({
  config: {
    dnipSensitivity: 0.5,
    adipAutoLevel: 0.5,
    aiAggressiveness: 0.5,
  },

  updateConfig: (partial) =>
    set((state) => ({
      config: { ...state.config, ...partial },
    })),
}));
