"use client";

import {
  useQuery,
  type UseQueryOptions,
  type UseQueryResult,
} from "@tanstack/react-query";
import type { Project } from "@/data/projects";
import type { ScrapedMetadata } from "@/types/metadata";

const API_METADATA = "/api/metadata";

export const metadataQueryKey = (url: string) => ["metadata", url] as const;

async function fetchMetadata(url: string): Promise<ScrapedMetadata> {
  const res = await fetch(
    `${API_METADATA}?url=${encodeURIComponent(url)}`
  );
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(
      body?.error ?? body?.details ?? `Request failed: ${res.status}`
    );
  }
  const json = await res.json();
  if (!json.success || json.data == null) {
    throw new Error(json?.error ?? "Invalid response");
  }
  return json.data;
}

export interface UseProjectMetadataOptions {
  /** Override default query options (staleTime, enabled, etc.) */
  queryOptions?: Omit<
    UseQueryOptions<ScrapedMetadata, Error, ScrapedMetadata, ReturnType<typeof metadataQueryKey>>,
    "queryKey" | "queryFn"
  >;
}

/**
 * Fetches website metadata when project.useMetadata is true and website is valid.
 * Uses react-query for caching and deduplication. Returns undefined data when
 * useMetadata is false or website is "#".
 */
export function useProjectMetadata(
  project: Project | null | undefined,
  options?: UseProjectMetadataOptions
): UseQueryResult<ScrapedMetadata, Error> & { shouldUseMetadata: boolean } {
  const url = project?.website;
  const shouldUseMetadata =
    Boolean(project?.useMetadata) &&
    Boolean(url) &&
    url !== "#";

  const query = useQuery({
    queryKey: metadataQueryKey(url ?? ""),
    queryFn: () => fetchMetadata(url!),
    enabled: shouldUseMetadata,
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 30, // 30 minutes (formerly cacheTime)
    retry: 1,
    ...options?.queryOptions,
  });

  return {
    ...query,
    shouldUseMetadata,
  };
}

/**
 * Fetches metadata for a single URL. Use for arbitrary URLs (e.g. OG tester).
 */
export function useMetadata(
  url: string | null | undefined,
  options?: UseProjectMetadataOptions
): UseQueryResult<ScrapedMetadata, Error> {
  const enabled =
    Boolean(url) &&
    url !== "#" &&
    (() => {
      try {
        new URL(url!);
        return true;
      } catch {
        return false;
      }
    })();

  return useQuery({
    queryKey: metadataQueryKey(url ?? ""),
    queryFn: () => fetchMetadata(url!),
    enabled,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
    retry: 1,
    ...options?.queryOptions,
  });
}
