import { ContributionCard } from "@/components/ContributionCard";
import { HomeHero } from "@/components/HomeHero";
import { ProjectCard } from "@/components/ProjectCard";
import { AUTHOR_NAME } from "@/constants";
import { OPEN_CONTRIBUTIONS, PROJECTS } from "@/data";
import { OGTester } from "./OGTester";

export default function Content() {
  return (
    <div className="mt-8">
      <HomeHero />

      <section className="mb-8">
        <header>
          <h2 className="my-2 mb-6 text-2xl font-bold sm:mb-8 sm:text-3xl">
            {AUTHOR_NAME}&apos;s projects
          </h2>
        </header>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <header>
          <h2 className="mb-3 text-xl font-bold sm:mb-4 sm:text-2xl">
            Open Contributions
          </h2>
        </header>

        <ul className="flex flex-col gap-2 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {OPEN_CONTRIBUTIONS.map((contribution) => (
            <ContributionCard
              key={contribution.id}
              contribution={contribution}
            />
          ))}
        </ul>
      </section>

      <OGTester />
    </div>
  );
}
