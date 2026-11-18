import Reveal from "./Reveal";
import type { Experience } from "@/data/portfolio";

export default function Timeline({ items }: { items: Experience[] }) {
  return (
    <ol className="space-y-7">
      {items.map((e, i) => (
        <li key={e.title + e.period}>
          <Reveal delay={i * 0.08}>
            <p className="text-xs text-muted">[{e.period}]</p>
            <h3 className="mt-1 text-lg font-semibold">
              <span aria-hidden className="text-muted">
                &gt;{" "}
              </span>
              {e.title}
            </h3>
            <p className="text-sm text-muted">{e.place}</p>
            {e.description && (
              <p className="mt-2 max-w-2xl text-sm leading-relaxed opacity-85">
                {e.description}
              </p>
            )}
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
