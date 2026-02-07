import { APP_NAME } from "@/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: `Articles and links from ${APP_NAME}.`,
  openGraph: {
    title: `Blog | ${APP_NAME}`,
    description: `Articles and links from ${APP_NAME}.`,
  },
};

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
