"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import type { Project } from "@/data/portfolio";

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <Reveal delay={index * 0.1} className="h-full">
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="h-full"
      >
        <Link
          href={`/projects/${project.slug}`}
          className="flex h-full flex-col rounded-xl border border-white/10 bg-white/5 p-6"
        >
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="mt-3 flex-1 text-sm opacity-70">{project.description}</p>
          <ul className="mt-4 flex flex-wrap gap-2 font-mono text-xs text-indigo-400">
            {project.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Link>
      </motion.div>
    </Reveal>
  );
}
