import { Footer, Navigation } from "@/components/layout";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { APP_DESCRIPTION, APP_NAME, AUTHOR_NAME, PROD_URL } from "@/constants";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // Optional: Improves performance by loading fallback fonts while Inter loads
});

const pattern = {
  dotSize: "1px",
  spacing: "20px",
  dotColor: "#171717",
} as const;

const backgroundStyle = {
  backgroundImage: `radial-gradient(${pattern.dotColor} ${pattern.dotSize}, transparent ${pattern.dotSize})`,
  backgroundSize: `${pattern.spacing} ${pattern.spacing}`,
  backgroundPosition: "center",
} as const;

export const metadata: Metadata = {
  metadataBase: new URL(PROD_URL),
  title: {
    default: `${APP_NAME} — Folio`,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  keywords: [
    "tomkoom",
    "portfolio",
    "full-stack developer",
    "web developer",
    "freelance developer",
    "blockchain developer",
    "web3",
    "react",
    "typescript",
    "next.js",
    "node.js",
    "side projects",
    "crypto",
    "trading tools",
    "AI",
    "open to work",
  ],
  authors: [{ name: AUTHOR_NAME, url: "https://github.com/tomkoom" }],
  creator: AUTHOR_NAME,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PROD_URL,
    siteName: `${APP_NAME} — Folio`,
    title: `${APP_NAME} — Folio`,
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    creator: "@tmkm44",
    title: `${APP_NAME} — Folio`,
    description: APP_DESCRIPTION,
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🛠️</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-[family-name:var(--font-inter)] antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <QueryProvider>
            <div
              className="flex min-h-screen flex-col bg-black"
              style={backgroundStyle}
            >
              <Navigation />
              <main className="mx-4 mt-4 flex-1 flex-grow sm:mx-6 xl:mx-8">
                {children}
              </main>

              <Footer />
            </div>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
