/**
 * Metadata shape returned by the metascraper API and used for OG-style cards.
 * Aligned with metascraper output and Twitter/OG previews.
 */
export interface ScrapedMetadata {
  title?: string | null;
  description?: string | null;
  image?: string | null;
  url?: string | null;
  publisher?: string | null;
  author?: string | null;
  logo?: string | null;
  date?: string | null;
}

export interface MetadataApiResponse {
  success: true;
  data: ScrapedMetadata;
}

export interface MetadataApiError {
  success: false;
  error: string;
  details?: string;
}

export type MetadataApiResult = MetadataApiResponse | MetadataApiError;
