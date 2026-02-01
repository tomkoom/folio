import * as cheerio from "cheerio";

export interface OpenGraphData {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  siteName?: string;
}

export async function getOpenGraph(url: string): Promise<OpenGraphData> {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (compatible; OGFetcher/1.0; +https://yourdomain.com)",
    },
  });

  if (!res.ok) throw new Error("Failed to fetch URL");

  const html = await res.text();
  const $ = cheerio.load(html);

  const og = (prop: string) =>
    $(`meta[property="${prop}"]`).attr("content");

  const name = (prop: string) =>
    $(`meta[name="${prop}"]`).attr("content");

  return {
    title: og("og:title") || name("twitter:title") || $("title").text(),
    description:
      og("og:description") ||
      name("twitter:description") ||
      name("description"),
    image: og("og:image") || name("twitter:image"),
    url: og("og:url") || url,
    siteName: og("og:site_name"),
  };
}
