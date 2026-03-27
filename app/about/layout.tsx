import { APP_NAME } from "@/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: `About ${APP_NAME} — full-stack developer building web apps, blockchain tools, trading bots, and AI products. Open to freelance and collaboration.`,
  keywords: [
    "tomkoom",
    "about",
    "full-stack developer",
    "freelance",
    "web3 developer",
    "blockchain",
    "AI developer",
    "hire developer",
    "open to work",
  ],
  openGraph: {
    title: `About | ${APP_NAME}`,
    description: `Full-stack developer building web apps, blockchain tools, trading bots, and AI products. Open to freelance and collaboration.`,
  },
  twitter: {
    card: "summary",
    title: `About | ${APP_NAME}`,
    description: `Full-stack developer building web apps, blockchain tools, trading bots, and AI products. Open to freelance and collaboration.`,
  },
};

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
