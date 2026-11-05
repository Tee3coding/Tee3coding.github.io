import Reveal from "./Reveal";
import { profile, skills } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="mb-8 text-3xl font-bold">About me</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-2xl opacity-80">{profile.about}</p>
        </Reveal>
        <Reveal delay={0.2}>
          <ul className="mt-8 flex flex-wrap gap-3">
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
      </div>
    </section>
  );
}
