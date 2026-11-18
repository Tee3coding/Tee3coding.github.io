import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

/** Shared wrapper: anchor target + consistent heading and spacing. */
export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="mb-10 text-3xl font-bold tracking-tight">{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
