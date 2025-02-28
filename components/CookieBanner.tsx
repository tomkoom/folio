"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

export const CookieBanner: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  return isVisible ? (
    <div className="fixed bottom-4 left-4 right-4 flex items-center justify-between bg-neutral-900 px-4 py-3 font-mono text-sm text-neutral-400">
      <p>
        This website uses basic analytical{" "}
        <Link href="/cookie" className="text-neutral-200 underline">
          cookies
        </Link>{" "}
        to enhance your experience.
      </p>
      <Button
        className="ml-4 h-12 bg-green-500 px-4 text-white hover:bg-green-600"
        onClick={acceptCookies}
      >
        Ok
      </Button>
    </div>
  ) : null;
};
