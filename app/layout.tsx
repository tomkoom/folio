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

// Customize these values to change the background pattern
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
          <div
            className="flex min-h-screen flex-col bg-black"
            style={backgroundStyle}
          >
            <Navigation />
            <main className="mx-6 mt-4 flex-1 flex-grow xl:mx-8">
              {children}
            </main>

            <footer className="mt-16 flex h-[160px] flex-wrap gap-2 px-6 py-8 text-xl font-semibold text-gray-400 xl:px-8">
              <div className="flex flex-1 flex-col gap-1">
                <span>
                  🛠️ by{" "}
                  <a
                    className="transition-all duration-300 ease-out hover:text-white hover:underline"
                    href="https://twitter.com/tmkm44"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @tmkm44
                  </a>
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
