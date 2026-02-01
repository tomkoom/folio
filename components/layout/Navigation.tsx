"use client";
import { APP_NAME } from "@/constants";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex h-20 flex-wrap items-center justify-between px-6 xl:px-8" aria-label="Main navigation">
      <Link
        href="/"
        className="text-neutral-200 transition-colors duration-300 ease-out hover:text-white"
        aria-label="Home"
      >
        <span className="font-mono text-lg font-black">{APP_NAME}</span>
      </Link>
    </nav>
  );
}
