import { GITHUB_URL } from "@/constants";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="mt-8">
      <header className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">About</h1>
      </header>

      <section className="max-w-2xl space-y-6 text-base leading-relaxed text-gray-300">
        <p>
          This is <strong className="text-white">tmkm&apos;s</strong> portfolio.
          I&apos;m a full-stack developer exploring web3, AI, and AI agents.
        </p>
        <p>
          I&apos;m available for hire — for collaboration or freelance work, reach
          out via the links in the footer or check out my work on{" "}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-gray-50 underline decoration-neutral-600 underline-offset-2 transition-colors hover:text-white hover:decoration-neutral-500"
          >
            GitHub
          </a>
          .
        </p>
      </section>

      <p className="mt-10">
        <Link
          href="/"
          className="text-sm font-semibold text-gray-400 transition-colors hover:text-white"
        >
          ← Back to projects
        </Link>
      </p>
    </div>
  );
}
