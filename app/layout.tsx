// import { CookieBanner } from "@/components/CookieBanner";
import { Navigation } from "@/components/layout";
import { APP_NAME } from "@/constants";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
// import Link from "next/link";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // Optional: Improves performance by loading fallback fonts while Inter loads
});

export const metadata: Metadata = {
  title: APP_NAME,
  description: "",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📄</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-[family-name:var(--font-inter)] antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          // enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col bg-black">
            <Navigation />
            <main className="mx-6 mt-4 flex-1 flex-grow xl:mx-8">
              {children}
            </main>

            <footer className="mt-16 flex flex-wrap gap-2 bg-neutral-950 px-4 pb-12 pt-8 text-sm font-semibold text-gray-400">
              <div className="flex-1">
                <span>
                  &copy; {new Date().getFullYear()} {APP_NAME}
                </span>
              </div>

              {/* <div className="flex-1">
                <Link
                  href="/cookie"
                  className="hover:text-white hover:underline"
                >
                  Cookie
                </Link>
              </div> */}
            </footer>

            {/* ... */}
            {/* <CookieBanner /> */}
          </div>
          <Toaster
            toastOptions={{
              style: {
                fontSize: "14px",
                fontWeight: "bold",
                color: "white",
                backgroundColor: "#262626",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
