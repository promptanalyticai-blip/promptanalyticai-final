//lib/wow-a11y.ts
export function getWOWA11Y(wow: any) {
  const fontSizeByLevel = {
    individual: "text-base",
    professional: "text-sm",
    enterprise: "text-lg",
  };

  const contrastByTone = {
    executive: "text-yellow-300",
    operational: "text-green-300",
    technical: "text-indigo-300",
    light: "text-blue-700",
  };

  const spacingByLevel = {
    individual: "leading-relaxed",
    professional: "leading-normal",
    enterprise: "leading-tight",
  };

  const ariaRolesByContext = {
    signal: "article",
    decision: "region",
    action: "status",
    kpi: "figure",
    user: "listitem",
    role: "listitem",
  };

  const keyboardFocus = {
    outline: "focus:outline focus:outline-2 focus:outline-offset-2",
    color: {
      executive: "focus:outline-yellow-300",
      operational: "focus:outline-green-300",
      technical: "focus:outline-indigo-300",
      light: "focus:outline-blue-700",
    },
  };

  return {
    fontSize: fontSizeByLevel[wow.level],
    contrast: contrastByTone[wow.tone],
    spacing: spacingByLevel[wow.level],
    ariaRoles: ariaRolesByContext,
    focusStyle: `${keyboardFocus.outline} ${keyboardFocus.color[wow.tone]}`,
  };
}
