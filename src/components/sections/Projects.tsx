"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "../Reveal";
import Section from "../Section";
import { projects, type Project } from "@/data/portfolio";

function Thumbnail({ project }: { project: Project }) {
  const box =
    "relative aspect-[16/10] w-36 shrink-0 overflow-hidden rounded-lg border border-white/20 transition-colors group-hover:border-indigo-400 sm:w-60";

  if (project.image) {
    return (
      <div className={box}>
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          sizes="(min-width: 640px) 240px, 144px"
          className="object-cover"
        />
      </div>
    );
  }

  // Placeholder until a screenshot is added.
  return (
    <div
      className={`${box} flex items-center justify-center bg-gradient-to-br from-indigo-500/30 to-white/5`}
      aria-hidden
    >
      <span className="text-5xl font-black opacity-40">{project.title[0]}</span>
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-4">
        {projects.map((p, i) => {
          const link = p.href ?? p.repo;
          return (
            <Reveal key={p.slug} delay={i * 0.08}>
              <motion.article
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-3 sm:gap-6 sm:p-4"
              >
                <Thumbnail project={p} />
                <div className="min-w-0 flex-1 py-1">
                  <h3 className="text-lg font-semibold sm:text-xl">
                    {link ? (
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-400"
                      >
                        {p.title}
                      </a>
                    ) : (
                      p.title
                    )}
                  </h3>
                  <p className="mt-2 text-sm opacity-70">{p.description}</p>
                  <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-indigo-400">
                    {p.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  {(p.href || p.repo) && (
                    <div className="mt-3 flex gap-4 text-sm">
                      {p.href && (
                        <a
                          href={p.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline-offset-4 hover:underline"
                        >
                          Live demo
                        </a>
                      )}
                      {p.repo && (
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline-offset-4 hover:underline"
                        >
                          Source
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
