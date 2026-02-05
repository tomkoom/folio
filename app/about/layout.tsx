import { APP_NAME } from "@/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: `About ${APP_NAME} — Full-stack developer exploring web3, AI, and AI agents. Available for hire.`,
  openGraph: {
    title: `About | ${APP_NAME}`,
    description: `Full-stack developer exploring web3, AI, and AI agents. Available for hire.`,
  },
};

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
