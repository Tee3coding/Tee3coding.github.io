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
    <Section id="skills" title="Skills" file="skills.exe">
      {profile.about && (
        <Reveal>
          <p className="mb-8 max-w-2xl text-sm leading-relaxed opacity-85">
            {profile.about}
          </p>
        </Reveal>
      )}

      {/* Folder-style tabs */}
      <div
        role="tablist"
        aria-label="Filter skills"
        className="mb-6 flex flex-wrap gap-1 border-b border-foreground"
      >
        {tabs.map((t) => {
          const active = t === tab;
          return (
            <button
              key={t}
              role="tab"
              aria-selected={active}
              onClick={() => setTab(t)}
              className={`relative -mb-px border border-b-0 border-foreground px-3 py-1.5 text-xs sm:text-sm ${
                active ? "text-background" : "text-muted hover:text-foreground"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="skill-tab"
                  className="absolute inset-0 bg-foreground"
                  transition={{ type: "spring", stiffness: 500, damping: 40 }}
                />
              )}
              <span className="relative">{t}</span>
            </button>
          );
        })}
      </div>

      <motion.ul
        layout
        className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
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
                transition={{ type: "spring", stiffness: 350, damping: 28 }}
                className="flex flex-col items-center gap-2 border border-foreground/40 px-3 py-4 text-center transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
              >
                <Icon className="h-7 w-7" aria-hidden />
                <span className="text-sm">{s.name}</span>
                {s.basic && <span className="text-[11px] opacity-60">basic</span>}
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>
    </Section>
  );
}
