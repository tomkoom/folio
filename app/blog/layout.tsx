import { APP_NAME } from "@/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: `Articles, notes, and links by ${APP_NAME} — covering web development, blockchain, crypto trading, and building side projects.`,
  keywords: [
    "tomkoom blog",
    "web development articles",
    "blockchain",
    "crypto",
    "trading",
    "side projects",
    "developer notes",
  ],
  openGraph: {
    title: `Blog | ${APP_NAME}`,
    description: `Articles, notes, and links by ${APP_NAME} — web development, blockchain, crypto trading, and side projects.`,
  },
  twitter: {
    card: "summary",
    title: `Blog | ${APP_NAME}`,
    description: `Articles, notes, and links by ${APP_NAME} — web development, blockchain, crypto trading, and side projects.`,
  },
};

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
