"use client";

import { useState } from "react";

export function OGTester() {
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<string>("");

    async function handleFetch() {
        if (!url) return;

        setLoading(true);
        setResult("");

        try {
            const res = await fetch(`/api/preview?url=${encodeURIComponent(url)}`);
            const data = await res.json();
            setResult(JSON.stringify(data, null, 2));
        } catch (error) {
            setResult(JSON.stringify({ error: "Failed to fetch" }, null, 2));
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="mt-16">
            <header>
                <h2 className="mb-4 text-2xl font-bold">OG Data Tester</h2>
            </header>

            <div className="rounded-lg bg-neutral-950 p-6">
                <div className="flex gap-2">
                    <input
                        type="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Enter URL (e.g., https://github.com/tomkoom)"
                        className="flex-1 rounded-md border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm text-white placeholder-gray-500 focus:border-neutral-700 focus:outline-none"
                        onKeyDown={(e) => {
                            if (e.key === "Enter") handleFetch();
                        }}
                    />
                    <button
                        onClick={handleFetch}
                        disabled={loading || !url}
                        className="rounded-md bg-neutral-800 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {loading ? "Fetching..." : "Fetch"}
                    </button>
                </div>

                {result && (
                    <pre className="mt-4 overflow-x-auto rounded-md bg-neutral-900 p-4">
                        <code className="text-sm text-gray-300">{result}</code>
                    </pre>
                )}
            </div>
        </section>
    );
}
