import { Icon } from "@/components/Icon";
import { Project } from "@/data/projects";

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

export function ProjectCard({ project }: ProjectCardProps) {
    const isClickable = project.website !== "#";
    const status = statusConfig[project.status];

    return (
        <li>
            <a
                href={isClickable ? project.website : undefined}
                target={isClickable ? "_blank" : undefined}
                rel={isClickable ? "noopener noreferrer" : undefined}
                className={`group flex h-full flex-col rounded-lg bg-neutral-950 p-6 leading-[150%] transition-all duration-300 ease-out hover:bg-neutral-900 hover:shadow-lg hover:shadow-neutral-900/30 ${isClickable ? "cursor-pointer" : "cursor-default"
                    }`}
            >
                <article className="flex h-full flex-col">
                    <div className="mb-4 flex-1">
                        <h2 className="text-2xl font-bold">{project.name}</h2>
                        <p className="mt-1 text-base text-gray-400">
                            {project.description}
                        </p>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                        <span className={`rounded-full px-2 py-1 text-xs font-semibold ${status.className}`}>
                            {status.label}
                        </span>

                        {isClickable && (
                            <span className="flex items-center gap-1 text-sm font-semibold text-gray-300 transition-colors group-hover:text-white">
                                <span>Visit</span>
                                <Icon lucideName="ArrowUpRight" className="h-4 w-4" />
                            </span>
                        )}
                    </div>
                </article>
            </a>
        </li>
    );
}
