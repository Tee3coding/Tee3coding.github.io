"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiCplusplus,
  SiCss,
  SiFlutter,
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostman,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { LuCode, LuDatabase } from "react-icons/lu";
import Reveal from "../Reveal";
import Section from "../Section";
import { profile, skillCategories, skills } from "@/data/portfolio";

// Keys here match the `icon` field of each skill in src/data/portfolio.ts.
const icons: Record<string, IconType> = {
  php: SiPhp,
  sql: LuDatabase,
  python: SiPython,
  javascript: SiJavascript,
  typescript: SiTypescript,
  html: SiHtml5,
  css: SiCss,
  java: FaJava,
  cpp: SiCplusplus,
  flutter: SiFlutter,
  nodejs: SiNodedotjs,
  react: SiReact,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  framer: SiFramer,
  git: SiGit,
  github: SiGithub,
  vscode: VscVscode,
  mysql: SiMysql,
  postman: SiPostman,
};

const tabs = ["All", ...skillCategories] as const;

export default function Skills() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("All");
  const visible = skills.filter((s) => tab === "All" || s.category === tab);

  return (
    <Section id="skills" title="Skills">
      {profile.about && (
        <Reveal>
          <p className="mb-8 max-w-2xl opacity-80">{profile.about}</p>
        </Reveal>
      )}

      <Reveal>
        <div role="tablist" aria-label="Filter skills" className="mb-8 flex flex-wrap gap-2">
          {tabs.map((t) => {
            const active = t === tab;
            return (
              <button
                key={t}
                role="tab"
                aria-selected={active}
                onClick={() => setTab(t)}
                className={`relative rounded-full border px-4 py-1.5 text-sm transition-colors ${
                  active
                    ? "border-transparent text-white"
                    : "border-white/20 opacity-70 hover:opacity-100"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="skill-tab"
                    className="absolute inset-0 rounded-full bg-indigo-500"
                    transition={{ type: "spring", stiffness: 500, damping: 38 }}
                  />
                )}
                <span className="relative">{t}</span>
              </button>
            );
          })}
        </div>
      </Reveal>

      <motion.ul
        layout
        className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((s) => {
            const Icon = icons[s.icon] ?? LuCode;
            return (
              <motion.li
                key={s.name}
                layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 350, damping: 28 }}
                className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-5 text-center transition-colors hover:border-indigo-400"
              >
                <Icon className="h-8 w-8 text-indigo-400" aria-hidden />
                <span className="text-sm">{s.name}</span>
                {s.basic && (
                  <span className="font-mono text-[11px] opacity-50">Basic</span>
                )}
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>
    </Section>
  );
}
