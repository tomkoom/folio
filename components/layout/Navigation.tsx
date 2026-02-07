"use client";

import { APP_NAME } from "@/constants";
import { NAV_LINKS } from "@/constants/nav";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav
      className="flex h-16 min-h-[4rem] flex-wrap items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6 sm:h-20 xl:px-8"
      aria-label="Main navigation"
    >
      <Link
        href="/"
        className="text-neutral-200 transition-colors duration-300 ease-out hover:text-white"
        aria-label="Home"
      >
        <span className="font-mono text-base font-black sm:text-lg">{APP_NAME}</span>
      </Link>
      <ul className="flex items-center gap-4 sm:gap-6">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`text-sm font-semibold transition-colors duration-200 sm:text-base ${pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href))
                ? "text-white"
                : "text-gray-400 hover:text-white"
                }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
