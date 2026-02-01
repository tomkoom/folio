import { ContributionCard } from "@/components/ContributionCard";
import { ProjectCard } from "@/components/ProjectCard";
import { OPEN_CONTRIBUTIONS, PROJECTS } from "@/data";
import { IS_DEV } from "@/constants";
import { OGTester } from "./OGTester";

export default function Content() {
  return (
    <div className="mt-8">
      <section className="mb-8">
        <header>
          <h1 className="my-2 mb-8 text-3xl font-bold">tmkm's projects</h1>
        </header>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ul>
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


