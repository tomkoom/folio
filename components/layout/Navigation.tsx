"use client";
import { APP_NAME } from "@/constants";
import { geistMono } from "@/lib/fonts";
import Link from "next/link";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

export const Navigation: FC = () => {
  return (
    <nav className="flex h-20 flex-wrap items-center justify-between px-6 xl:px-8">
      <Link href="/" className="text-gray-300 hover:text-white">
        <h1 className={twMerge("text-lg font-black", geistMono.className)}>
          {APP_NAME}
        </h1>
      </Link>
    </nav>
  );
};
