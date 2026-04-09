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
    <li>
      <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-neutral-800/60 bg-neutral-950 transition-all duration-300 ease-out hover:border-neutral-700/80 hover:bg-neutral-900 hover:shadow-lg hover:shadow-neutral-950/50">
        <div className="flex flex-1 flex-col justify-between p-6">
          <div>
            <h3 className="text-lg font-bold capitalize text-white">
              {displayName}
            </h3>
            <p className="mt-1 text-sm text-gray-500">Open source project</p>
          </div>

          <div className="mt-6 flex gap-2">
            <a
              href={contribution.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-neutral-800/60 bg-neutral-900/50 px-4 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:border-neutral-700/80 hover:bg-neutral-800/80 hover:text-white"
              aria-label={`View ${displayName} on GitHub`}
            >
              <Icon lucideName="Github" className="h-4 w-4" />
              <span>GitHub</span>
            </a>
            <a
              href={contribution.appLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-neutral-800/60 bg-neutral-900/50 px-4 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:border-neutral-700/80 hover:bg-neutral-800/80 hover:text-white"
              aria-label={`Visit ${displayName} app`}
            >
              <Icon lucideName="ExternalLink" className="h-4 w-4" />
              <span>Live</span>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}
