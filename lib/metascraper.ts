import metascraper from "metascraper";
import metascraperAuthor from "metascraper-author";
import metascraperDescription from "metascraper-description";
import metascraperImage from "metascraper-image";
import metascraperLogo from "metascraper-logo";
import metascraperPublisher from "metascraper-publisher";
import metascraperTitle from "metascraper-title";
import metascraperUrl from "metascraper-url";
import type { ScrapedMetadata } from "@/types/metadata";

const scraper = metascraper([
  metascraperAuthor(),
  metascraperDescription(),
  metascraperImage(),
  metascraperLogo(),
  metascraperPublisher(),
  metascraperTitle(),
  metascraperUrl(),
]);

const USER_AGENT =
  "Mozilla/5.0 (compatible; Metascraper/1.0; +https://github.com/microlinkhq/metascraper)";

/**
 * Fetches HTML from URL and extracts metadata using metascraper rules
 * (Open Graph, Twitter Cards, HTML meta, etc.). Used for OG-style project cards.
 */
export async function getMetadata(url: string): Promise<ScrapedMetadata> {
  const res = await fetch(url, {
    headers: { "User-Agent": USER_AGENT },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch URL: ${res.status}`);
  }

  const html = await res.text();
  const metadata = await scraper({ url, html });

  return {
    title: metadata.title ?? null,
    description: metadata.description ?? null,
    image: metadata.image ?? null,
    url: metadata.url ?? url,
    publisher: metadata.publisher ?? null,
    author: metadata.author ?? null,
    logo: metadata.logo ?? null,
    date: metadata.date ?? null,
  };
}

/**
 * Safe wrapper: returns metadata or fallback when fetch/parse fails
 * (e.g. blocked sites, JS-only pages). Aligns with Notion/Slack-style fallbacks.
 */
export async function getMetadataSafe(url: string): Promise<ScrapedMetadata> {
  try {
    const data = await getMetadata(url);
    if (!data.title && !data.image) {
      throw new Error("No title or image");
    }
    return data;
  } catch {
    return {
      title: new URL(url).hostname,
      description: "Preview unavailable",
      url,
      image: null,
      publisher: null,
      author: null,
      logo: null,
      date: null,
    };
  }
}
