import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { experience, profile, skills } from "@/data/portfolio";

export const metadata: Metadata = { title: "About | Tee3coding" };

export default function AboutPage() {
  return (
    <div className="px-6 pb-24 pt-32">
      <div className="mx-auto max-w-5xl">
        <PageHeader eyebrow="About" title="A little about me" intro={profile.about} />

        <Reveal>
          <h2 className="mb-4 text-2xl font-semibold">Skills</h2>
          <ul className="flex flex-wrap gap-3">
            {skills.map((s) => (
              <li
                key={s}
                className="rounded-full border border-white/15 px-4 py-1.5 font-mono text-sm"
              >
                {s}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <h2 className="mb-6 mt-16 text-2xl font-semibold">Experience</h2>
        </Reveal>
        <ol className="space-y-8 border-l border-white/15 pl-6">
          {experience.map((e, i) => (
            <li key={e.title}>
              <Reveal delay={i * 0.1}>
                <p className="font-mono text-xs text-indigo-400">{e.period}</p>
                <h3 className="mt-1 text-lg font-semibold">
                  {e.title} <span className="opacity-60">@ {e.place}</span>
                </h3>
                <p className="mt-2 text-sm opacity-70">{e.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
