"use client";

import { Icon } from "@/components/Icon";
import type { Project } from "@/data/projects";
import { useProjectMetadata } from "@/hooks/useProjectMetadata";
import type { ScrapedMetadata } from "@/types/metadata";

const statusConfig = {
  "in-progress": {
    label: "In Progress",
    className: "bg-blue-500/10 text-blue-400",
  },
  completed: {
    label: "Completed",
    className: "bg-green-500/10 text-green-400",
  },
  "not-started": {
    label: "Not Started",
    className: "bg-gray-500/10 text-gray-400",
  },
} as const;

interface ProjectCardProps {
  project: Project;
}

const linkClassName =
  "group flex h-full flex-col overflow-hidden rounded-xl border border-neutral-800/60 bg-neutral-950 transition-all duration-300 ease-out hover:border-neutral-700/80 hover:bg-neutral-900 hover:shadow-lg hover:shadow-neutral-950/50";

function CardFooter({
  project,
  isClickable,
}: {
  project: Project;
  isClickable: boolean;
}) {
  const status = statusConfig[project.status];
  return (
    <div className="flex items-center justify-between gap-2 border-t border-neutral-800/60 px-4 py-3">
      <span
        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${status.className}`}
      >
        {status.label}
      </span>
      {isClickable && (
        <span className="flex items-center gap-1 text-sm font-semibold text-gray-400 transition-colors group-hover:text-white">
          <span>Visit</span>
          <Icon lucideName="ArrowUpRight" className="h-4 w-4" />
        </span>
      )}
    </div>
  );
}

/** OG-style card: image, title, description (Twitter-like). */
function MetadataCardContent({
  metadata,
  project,
}: {
  metadata: ScrapedMetadata;
  project: Project;
}) {
  const title = metadata.title ?? project.name;
  const description =
    metadata.description ?? project.description;
  const hasImage = Boolean(metadata.image);

  return (
    <>
      {hasImage && (
        <div className="relative aspect-[2/1] w-full shrink-0 bg-neutral-900">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={metadata.image!}
            alt=""
            className="h-full w-full object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-4">
        {metadata.publisher && (
          <p className="mb-1 text-xs font-medium uppercase tracking-wide text-gray-500">
            {metadata.publisher}
          </p>
        )}
        <h2 className="line-clamp-2 text-lg font-bold leading-snug text-white">
          {title}
        </h2>
        {description && (
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-gray-400">
            {description}
          </p>
        )}
      </div>
    </>
  );
}

/** Local card: name + description only (no OG image). */
function LocalCardContent({ project }: { project: Project }) {
  return (
    <div className="flex flex-1 flex-col p-6">
      <h2 className="text-xl font-bold text-white">{project.name}</h2>
      <p className="mt-1.5 text-base leading-relaxed text-gray-400">
        {project.description}
      </p>
    </div>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isClickable = project.website !== "#";
  const {
    data: metadata,
    isError,
    isLoading,
    shouldUseMetadata,
  } = useProjectMetadata(project);

  const showMetadataCard =
    shouldUseMetadata &&
    metadata != null &&
    !isError &&
    (metadata.title != null || metadata.image != null);

  return (
    <li>
      <a
        href={isClickable ? project.website : undefined}
        target={isClickable ? "_blank" : undefined}
        rel={isClickable ? "noopener noreferrer" : undefined}
        className={`${linkClassName} ${isClickable ? "cursor-pointer" : "cursor-default"}`}
      >
        <article className="flex h-full flex-col">
          {showMetadataCard ? (
            <MetadataCardContent metadata={metadata} project={project} />
          ) : (
            <LocalCardContent project={project} />
          )}
          <CardFooter project={project} isClickable={isClickable} />
        </article>
      </a>
    </li>
  );
}
