import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/portfolio";

type Props = { params: Promise<{ slug: string }> };

// Required for static export: one HTML page per project.
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project ? `${project.title} | Tee3coding` : "Project" };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="px-6 pb-24 pt-32">
      <article className="mx-auto max-w-3xl">
        <Reveal>
          <Link href="/projects" className="text-sm text-indigo-400 hover:underline">
            &larr; All projects
          </Link>
          <h1 className="mt-6 text-4xl font-bold tracking-tight">{project.title}</h1>
          <ul className="mt-4 flex flex-wrap gap-2 font-mono text-xs text-indigo-400">
            {project.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <p className="mt-8 opacity-80">{project.details}</p>
          <div className="mt-8 flex gap-4 text-sm">
            {project.href && (
              <a
                href={project.href}
                className="rounded-md bg-indigo-500 px-5 py-2.5 font-medium text-white"
              >
                Live demo
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                className="rounded-md border border-white/20 px-5 py-2.5"
              >
                Source code
              </a>
            )}
          </div>
        </Reveal>
      </article>
    </div>
  );
}
