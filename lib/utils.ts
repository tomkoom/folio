import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Normalizes user input into an absolute URL (https by default).
 * Handles: "website.com", "http://...", "https://...", etc.
 */
export function normalizeUrl(input: string): string {
  const trimmed = input.trim();
  if (!trimmed) return "";
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return "https://" + trimmed;
}

/**
 * Returns true if the string can be used as a URL (after normalization).
 */
export function isValidUrlInput(input: string): boolean {
  const url = normalizeUrl(input);
  if (!url) return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
