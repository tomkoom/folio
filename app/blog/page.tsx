import { Icon } from "@/components/Icon";
import { getAllPosts, trimDescription } from "@/lib/blog";
import Link from "next/link";

const DESCRIPTION_MAX_LENGTH = 120;

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mt-8">
      <header className="mb-6 sm:mb-8">
        <h1 className="mb-2 text-2xl font-bold sm:text-3xl">Blog</h1>
        <p className="text-base text-gray-400">
          Occasional articles and link lists.
        </p>
      </header>

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => {
          const description = trimDescription(
            post.description,
            DESCRIPTION_MAX_LENGTH
          );
          return (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-xl border border-neutral-800/60 bg-neutral-950 p-4 transition-colors hover:border-neutral-700/80 hover:bg-neutral-900 sm:p-5"
              >
                <h2 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-white sm:text-xl">
                  {post.title}
                </h2>
                {description && (
                  <p className="mb-3 line-clamp-2 flex-1 text-sm leading-relaxed text-gray-400">
                    {description}
                  </p>
                )}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-neutral-800/80 px-2 py-0.5 text-xs text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-gray-400 transition-colors group-hover:text-white">
                  Read
                  <Icon lucideName="ArrowUpRight" className="h-4 w-4" />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      {posts.length === 0 && (
        <p className="text-gray-400">No posts yet.</p>
      )}
    </div>
  );
}
