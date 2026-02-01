import { Footer, Navigation } from "@/components/layout";
import { APP_DESCRIPTION, APP_NAME } from "@/constants";
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
  title: APP_NAME,
  description: APP_DESCRIPTION,
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
          // enableSystem
          disableTransitionOnChange
        >
          <div
            className="flex min-h-screen flex-col bg-black"
            style={backgroundStyle}
          >
            <Navigation />
            <main className="mx-6 mt-4 flex-1 flex-grow xl:mx-8">
              {children}
            </main>

            <Footer />
          </div>

        </ThemeProvider>
      </body>
    </html>
  );
}
