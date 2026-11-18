"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "../Reveal";
import Section from "../Section";
import { projects, type Project } from "@/data/portfolio";

function Thumbnail({ project }: { project: Project }) {
  const box =
    "relative aspect-[16/10] w-32 shrink-0 overflow-hidden border border-foreground/60 sm:w-56";

  if (project.image) {
    return (
      <div className={box}>
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          sizes="(min-width: 640px) 224px, 128px"
          className="object-cover grayscale transition duration-300 group-hover:grayscale-0"
        />
      </div>
    );
  }

  // Placeholder until a screenshot is added: hatched "empty file" look.
  return (
    <div
      className={`${box} flex items-center justify-center`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, rgba(232,232,232,0.12) 0 2px, transparent 2px 9px)",
      }}
      aria-hidden
    >
      <span className="bg-background px-2 text-3xl font-semibold">
        {project.title[0]}
      </span>
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects" file="projects/">
      <div className="space-y-3">
        {projects.map((p, i) => {
          const link = p.href ?? p.repo;
          return (
            <Reveal key={p.slug} delay={i * 0.08}>
              <motion.article
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="group flex items-start gap-4 border border-foreground/40 p-3 transition-colors hover:border-foreground sm:gap-6 sm:p-4"
              >
                <Thumbnail project={p} />
                <div className="min-w-0 flex-1 py-1">
                  <h3 className="text-base font-semibold sm:text-lg">
                    {link ? (
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-4 hover:underline"
                      >
                        {p.title}
                      </a>
                    ) : (
                      p.title
                    )}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed opacity-85">
                    {p.description}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-1 text-xs text-muted">
                    {p.tags.map((t) => (
                      <li key={t}>[{t}]</li>
                    ))}
                  </ul>
                  {(p.href || p.repo) && (
                    <div className="mt-3 flex gap-4 text-sm">
                      {p.href && (
                        <a
                          href={p.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline underline-offset-4 hover:opacity-70"
                        >
                          live demo
                        </a>
                      )}
                      {p.repo && (
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline underline-offset-4 hover:opacity-70"
                        >
                          source
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
