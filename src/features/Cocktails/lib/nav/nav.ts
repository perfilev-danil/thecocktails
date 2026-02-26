export const getNavLinkClass =
  (activeClass: string) =>
  ({ isActive }: { isActive: boolean }) =>
    isActive ? activeClass : "";
