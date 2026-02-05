import { Icon } from "@/components/Icon";

interface Contribution {
  id: string;
  github: string;
  appLink: string;
}

interface ContributionCardProps {
  contribution: Contribution;
}

export function ContributionCard({ contribution }: ContributionCardProps) {
  const displayName = contribution.id.replace(/-/g, " ");

  return (
    <li className="group">
      <div className="flex items-center gap-3 rounded-lg bg-neutral-950 px-3 py-3 transition-colors duration-200 hover:bg-neutral-900 sm:gap-4 sm:px-4">
        <span className="min-w-0 flex-1 break-words font-semibold capitalize text-gray-300">
          {displayName}
        </span>
        <div className="flex gap-2">
          <a
            href={contribution.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors hover:text-white"
            aria-label={`View ${displayName} on GitHub`}
          >
            <Icon lucideName="Github" className="h-5 w-5" />
          </a>
          <a
            href={contribution.appLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors hover:text-white"
            aria-label={`Visit ${displayName} app`}
          >
            <Icon lucideName="ExternalLink" className="h-5 w-5" />
          </a>
        </div>
      </div>
    </li>
  );
}
