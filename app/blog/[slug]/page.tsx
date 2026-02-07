import { MarkdownContent } from "@/components/blog/MarkdownContent";
import { getPostBySlug, getPostSlugs } from "@/lib/blog";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.content.slice(0, 160).replace(/\n/g, " ").trim(),
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="mt-8 max-w-2xl mx-auto">
      <p className="mb-6">
        <Link
          href="/blog"
          className="text-sm font-semibold text-gray-400 transition-colors hover:text-white"
        >
          ← Back to blog
        </Link>
      </p>

      <div>
        <MarkdownContent content={post.content} />
      </div>
    </div>
  );
}
