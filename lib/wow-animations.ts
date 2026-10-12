//lib/wow-animations.ts
export function getWOWAnimations(wow: any) {
  const animations = {
    individual: {
      enter: "transition-all duration-700 ease-out",
      hover: "hover:scale-[1.02] hover:shadow-lg",
      click: "active:scale-[0.98]",
    },
    professional: {
      enter: "transition-all duration-500 ease-in-out",
      hover: "hover:scale-[1.01] hover:shadow-md",
      click: "active:scale-[0.99]",
    },
    enterprise: {
      enter: "transition-all duration-300 ease-linear",
      hover: "hover:opacity-90",
      click: "active:opacity-80",
    },
  };

  const tones = {
    executive: {
      glow: "shadow-[0_0_20px_rgba(255,215,0,0.4)]",
    },
    operational: {
      glow: "shadow-[0_0_15px_rgba(0,255,150,0.3)]",
    },
    technical: {
      glow: "shadow-[0_0_15px_rgba(80,80,255,0.3)]",
    },
    light: {
      glow: "shadow-[0_0_10px_rgba(0,150,255,0.2)]",
    },
  };

  return {
    ...animations[wow.level],
    ...tones[wow.tone],
  };
}
