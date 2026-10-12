//lib/wow-responsive.ts
export function getWOWResponsive(wow: any) {
  const columnsByRole = {
    owner: { mobile: 1, tablet: 2, desktop: 3 },
    admin: { mobile: 1, tablet: 2, desktop: 2 },
    manager: { mobile: 1, tablet: 2, desktop: 2 },
    analyst: { mobile: 1, tablet: 1, desktop: 2 },
    viewer: { mobile: 1, tablet: 1, desktop: 1 },
  };

  const densityByLevel = {
    individual: "p-4 space-y-4",
    professional: "p-6 space-y-6",
    enterprise: "p-8 space-y-8",
  };

  const breakpoints = {
    mobile: "grid-cols-1",
    tablet: "md:grid-cols-2",
    desktop: "lg:grid-cols-3",
  };

  return {
    columns: columnsByRole[wow.role],
    density: densityByLevel[wow.level],
    breakpoints,
  };
}
