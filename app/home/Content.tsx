import { Icon } from "@/components/Icon";
import { OPEN_CONTRIBUTIONS, PROJECTS } from "@/data";


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

export default function Content() {
  return (
    <div className="mt-8">
      <section className="mb-8">
        <header>
          <h1 className="my-2 mb-8 text-3xl font-bold">tmkm's projects</h1>
        </header>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PROJECTS.map((project) => (
            <li key={project.id}>
              <a
                href={project.website !== "#" ? project.website : undefined}
                target={project.website !== "#" ? "_blank" : undefined}
                rel={project.website !== "#" ? "noopener noreferrer" : undefined}
                className={`group flex h-full flex-col rounded-lg bg-neutral-950 p-6 leading-[150%] transition-all duration-300 ease-out hover:bg-neutral-900 hover:shadow-lg hover:shadow-neutral-900/30 ${project.website === "#" ? "cursor-default" : "cursor-pointer"
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
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-semibold ${statusConfig[project.status as keyof typeof statusConfig].className}`}
                    >
                      {statusConfig[project.status as keyof typeof statusConfig].label}
                    </span>

                    {project.website !== "#" && (
                      <span className="flex items-center gap-1 text-sm font-semibold text-gray-300 transition-colors group-hover:text-white">
                        <span>Visit</span>
                        <Icon lucideName="ArrowUpRight" className="h-4 w-4" />
                      </span>
                    )}
                  </div>
                </article>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <header>
          <h2 className="mb-4 text-2xl font-bold">Open Contributions</h2>
        </header>

        <ul className="flex flex-col gap-2 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {OPEN_CONTRIBUTIONS.map((contribution) => (
            <li key={contribution.id} className="group">
              <div className="flex items-center gap-4 rounded-lg bg-neutral-950 px-4 py-3 transition-colors duration-200 hover:bg-neutral-900">
                <span className="flex-1 font-semibold capitalize text-gray-300">
                  {contribution.id.replace(/-/g, " ")}
                </span>
                <div className="flex gap-2">
                  <a
                    href={contribution.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 transition-colors hover:text-white"
                    aria-label={`View ${contribution.id} on GitHub`}
                  >
                    <Icon lucideName="Github" className="h-5 w-5" />
                  </a>
                  <a
                    href={contribution.appLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 transition-colors hover:text-white"
                    aria-label={`Visit ${contribution.id} app`}
                  >
                    <Icon lucideName="ExternalLink" className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}


