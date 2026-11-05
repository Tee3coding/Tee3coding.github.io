"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="mb-10 text-3xl font-bold">Projects</h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex h-full flex-col rounded-xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm opacity-70">{p.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2 font-mono text-xs text-indigo-400">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="mt-4 flex gap-4 text-sm">
                  {p.href && (
                    <a href={p.href} className="underline-offset-4 hover:underline">
                      Live
                    </a>
                  )}
                  {p.repo && (
                    <a href={p.repo} className="underline-offset-4 hover:underline">
                      Code
                    </a>
                  )}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
