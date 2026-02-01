"use client";
import { APP_NAME } from "@/constants";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex h-20 flex-wrap items-center justify-between px-6 xl:px-8">
      <Link
        href="/"
        className="text-neutral-200 transition-colors duration-300 ease-out hover:text-white"
      >
        <h1 className={"font-mono text-lg font-black"}>{APP_NAME}</h1>
      </Link>
    </nav>
  );
};
