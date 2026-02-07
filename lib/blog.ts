import { readdirSync, readFileSync } from "fs";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

const FRONTMATTER_REGEX = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;

export interface BlogPost {
  slug: string;
  title: string;
  content: string;
  description?: string;
  tags?: string[];
}

function parseFrontmatter(raw: string): {
  description?: string;
  tags?: string[];
} {
  const out: { description?: string; tags?: string[] } = {};
  for (const line of raw.split("\n")) {
    const descMatch = line.match(/^description:\s*["']?(.+?)["']?\s*$/);
    if (descMatch) {
      out.description = descMatch[1].trim();
      continue;
    }
    const tagsMatch = line.match(/^tags:\s*(.+)$/);
    if (tagsMatch) {
      const value = tagsMatch[1].trim();
      if (value.startsWith("[")) {
        out.tags = value
          .slice(1, -1)
          .split(",")
          .map((s) => s.trim().replace(/^["']|["']$/g, ""));
      } else {
        out.tags = value.split(/[\s,·]+/).map((s) => s.trim()).filter(Boolean);
      }
    }
  }
  return out;
}

function extractTitle(content: string): string {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : "";
}

export function getPostSlugs(): string[] {
  if (typeof window !== "undefined") return [];
  const files = readdirSync(BLOG_DIR, "utf-8");
  return files
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getPostBySlug(slug: string): BlogPost | null {
  if (typeof window !== "undefined") return null;
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  try {
    const raw = readFileSync(filePath, "utf-8");
    const fmMatch = raw.match(FRONTMATTER_REGEX);
    let body: string;
    let description: string | undefined;
    let tags: string[] | undefined;
    if (fmMatch) {
      const [, fm, content] = fmMatch;
      body = content.trim();
      const parsed = parseFrontmatter(fm);
      description = parsed.description;
      tags = parsed.tags?.length ? parsed.tags : undefined;
    } else {
      body = raw;
    }
    const title = extractTitle(body);
    return {
      slug,
      title: title || slug,
      content: body,
      description,
      tags,
    };
  } catch {
    return null;
  }
}

export function getAllPosts(): BlogPost[] {
  const slugs = getPostSlugs();
  return slugs
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is BlogPost => p != null);
}

/** Trim description to a max length for cards. */
export function trimDescription(
  text: string | undefined,
  maxLength: number = 120
): string {
  if (!text) return "";
  const trimmed = text.trim();
  if (trimmed.length <= maxLength) return trimmed;
  return trimmed.slice(0, maxLength).trim().replace(/\s+\S*$/, "") + "…";
}
