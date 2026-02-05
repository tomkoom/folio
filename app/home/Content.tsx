import { ContributionCard } from "@/components/ContributionCard";
import { ProjectCard } from "@/components/ProjectCard";
import { IS_DEV } from "@/constants";
import {
  groupProjectsByKind,
  OPEN_CONTRIBUTIONS,
  PROJECT_KIND_LABELS,
  PROJECT_KIND_ORDER,
  PROJECTS,
} from "@/data";
import { OGTester } from "./OGTester";

export default function Content() {
  const grouped = groupProjectsByKind(PROJECTS);
  return (
    <div className="mt-8">
      <section className="mb-8">
        <header>
          <h1 className="my-2 mb-8 text-3xl font-bold">tmkm's projects</h1>
        </header>

        <div className="space-y-12">
          {PROJECT_KIND_ORDER.map((kind) => {
            const projects = grouped.get(kind) ?? [];
            if (projects.length === 0) return null;
            return (
              <div key={kind}>
                <h2 className="mb-4 text-xl font-semibold text-gray-300">
                  {PROJECT_KIND_LABELS[kind]}
                </h2>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-16">
        <header>
          <h2 className="mb-4 text-2xl font-bold">Open Contributions</h2>
        </header>

        <ul className="flex flex-col gap-2 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {OPEN_CONTRIBUTIONS.map((contribution) => (
            <ContributionCard key={contribution.id} contribution={contribution} />
          ))}
        </ul>
      </section>

      {IS_DEV && <OGTester />}
    </div>
  );
}


