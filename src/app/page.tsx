import Link from "next/link";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/portfolio";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="mb-8 flex items-end justify-between">
              <h2 className="text-3xl font-bold">Featured work</h2>
              <Link href="/projects" className="text-sm text-indigo-400 hover:underline">
                See all &rarr;
              </Link>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
