import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/portfolio";

export const metadata: Metadata = { title: "Projects | Tee3coding" };

export default function ProjectsPage() {
  return (
    <div className="px-6 pb-24 pt-32">
      <div className="mx-auto max-w-5xl">
        <PageHeader
          eyebrow="Projects"
          title="Things I've built"
          intro="A selection of my work. Click a card for details."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
