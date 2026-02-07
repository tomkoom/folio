import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";

const proseClasses = {
  h1: "mb-4 mt-8 text-2xl font-bold text-white first:mt-0 sm:text-3xl",
  h2: "mb-3 mt-6 text-xl font-bold text-white sm:text-2xl",
  h3: "mb-2 mt-4 text-lg font-bold text-white",
  p: "mb-3 leading-relaxed text-gray-300 last:mb-0",
  ul: "mb-4 list-disc space-y-1 pl-6 text-gray-300",
  ol: "mb-4 list-decimal space-y-1 pl-6 text-gray-300",
  li: "leading-relaxed",
  a: "font-medium text-gray-50 underline decoration-neutral-600 underline-offset-2 transition-colors hover:text-white hover:decoration-neutral-500",
  strong: "font-semibold text-white",
  code: "rounded bg-neutral-800 px-1.5 py-0.5 font-mono text-sm text-gray-300",
  pre: "mb-4 overflow-x-auto rounded-lg bg-neutral-900 p-4",
  blockquote: "border-l-2 border-neutral-700 pl-4 text-gray-400",
  hr: "my-6 border-neutral-800",
};

const components: Components = {
  h1: ({ children }) => <h1 className={proseClasses.h1}>{children}</h1>,
  h2: ({ children }) => <h2 className={proseClasses.h2}>{children}</h2>,
  h3: ({ children }) => <h3 className={proseClasses.h3}>{children}</h3>,
  p: ({ children }) => <p className={proseClasses.p}>{children}</p>,
  ul: ({ children }) => <ul className={proseClasses.ul}>{children}</ul>,
  ol: ({ children }) => <ol className={proseClasses.ol}>{children}</ol>,
  li: ({ children }) => <li className={proseClasses.li}>{children}</li>,
  a: ({ href, children }) => (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className={proseClasses.a}
    >
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong className={proseClasses.strong}>{children}</strong>
  ),
  code: ({ className, children }) => {
    const isInline = !className;
    if (isInline) {
      return <code className={proseClasses.code}>{children}</code>;
    }
    return (
      <code className={`${proseClasses.code} block whitespace-pre`}>
        {children}
      </code>
    );
  },
  pre: ({ children }) => <pre className={proseClasses.pre}>{children}</pre>,
  blockquote: ({ children }) => (
    <blockquote className={proseClasses.blockquote}>{children}</blockquote>
  ),
  hr: () => <hr className={proseClasses.hr} />,
};

interface MarkdownContentProps {
  content: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <article className="markdown-content">
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </article>
  );
}
