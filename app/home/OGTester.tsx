"use client";

import { useMetadata } from "@/hooks/useProjectMetadata";
import { isValidUrlInput, normalizeUrl } from "@/lib/utils";
import { useState } from "react";

export function OGTester() {
  const [inputValue, setInputValue] = useState("");
  const [queryUrl, setQueryUrl] = useState<string | null>(null);

  const normalized = inputValue.trim() ? normalizeUrl(inputValue) : "";
  const canSubmit = isValidUrlInput(inputValue);

  const { data, error, isFetching } = useMetadata(queryUrl || undefined);

  function handleSubmit() {
    if (!canSubmit) return;
    setQueryUrl(normalizeUrl(inputValue));
  }

  const showResult = queryUrl != null;
  const resultJson =
    error
      ? JSON.stringify({ error: error.message }, null, 2)
      : data != null
        ? JSON.stringify(data, null, 2)
        : null;

  return (
    <section className="mt-16">
      <header>
        <h2 className="mb-2 text-xl font-bold sm:text-2xl">OG Data Tester</h2>
        <p className="mb-4 text-xs text-gray-400 sm:text-sm">
          Fetch Open Graph / metadata for any URL. Try{" "}
          <code className="rounded bg-neutral-800 px-1 py-0.5 text-xs">
            website.com
          </code>
          ,{" "}
          <code className="rounded bg-neutral-800 px-1 py-0.5 text-xs">
            https://...
          </code>
          , or{" "}
          <code className="rounded bg-neutral-800 px-1 py-0.5 text-xs">
            http://...
          </code>
          .
        </p>
      </header>

      <div className="rounded-xl border border-neutral-800/60 bg-neutral-950 p-4 sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            type="url"
            inputMode="url"
            autoComplete="url"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter URL (e.g. github.com or https://example.com)"
            className="min-w-0 flex-1 rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-neutral-700 focus:outline-none focus:ring-1 focus:ring-neutral-700"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSubmit();
              }
            }}
            aria-label="URL to fetch metadata for"
          />
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!canSubmit || isFetching}
            className="shrink-0 rounded-lg bg-neutral-800 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isFetching ? "Fetching…" : "Fetch"}
          </button>
        </div>

        {showResult && queryUrl && (
          <p className="mt-3 text-xs text-gray-500">
            Fetched: <span className="break-all font-mono">{queryUrl}</span>
          </p>
        )}

        {showResult && resultJson != null && (
          <pre className="mt-4 overflow-x-auto rounded-lg bg-neutral-900 p-4 text-sm text-gray-300">
            <code>{resultJson}</code>
          </pre>
        )}
      </div>
    </section>
  );
}
