export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
] as const;

export type NavLink = (typeof NAV_LINKS)[number];
