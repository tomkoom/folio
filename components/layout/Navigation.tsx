"use client";

import { APP_NAME } from "@/constants";
import { NAV_LINKS } from "@/constants/nav";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav
      className="flex h-20 flex-wrap items-center justify-between gap-4 px-6 xl:px-8"
      aria-label="Main navigation"
    >
      <Link
        href="/"
        className="text-neutral-200 transition-colors duration-300 ease-out hover:text-white"
        aria-label="Home"
      >
        <span className="font-mono text-lg font-black">{APP_NAME}</span>
      </Link>
      <ul className="flex items-center gap-6">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`text-base font-semibold transition-colors duration-200 ${pathname === link.href
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
