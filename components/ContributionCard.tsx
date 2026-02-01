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
      <div className="flex items-center gap-4 rounded-lg bg-neutral-950 px-4 py-3 transition-colors duration-200 hover:bg-neutral-900">
        <span className="flex-1 font-semibold capitalize text-gray-300">
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
