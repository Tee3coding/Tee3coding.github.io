import Reveal from "./Reveal";
import type { Experience } from "@/data/portfolio";

export default function Timeline({ items }: { items: Experience[] }) {
  return (
    <ol className="space-y-8 border-l border-white/15 pl-6">
      {items.map((e, i) => (
        <li key={e.title + e.period}>
          <Reveal delay={i * 0.1}>
            <p className="font-mono text-xs text-indigo-400">{e.period}</p>
            <h3 className="mt-1 text-lg font-semibold">{e.title}</h3>
            <p className="text-sm opacity-60">{e.place}</p>
            {e.description && (
              <p className="mt-2 max-w-2xl text-sm opacity-70">{e.description}</p>
            )}
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
