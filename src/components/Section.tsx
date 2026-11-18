import type { ReactNode } from "react";
import Window from "./Window";

type SectionProps = {
  id: string;
  title: string;
  /** Window title bar text, e.g. "skills.exe" */
  file: string;
  children: ReactNode;
};

/** Shared wrapper: anchor target, rendered as a retro window. */
export default function Section({ id, title, file, children }: SectionProps) {
  return (
    <section id={id} className="px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-5xl">
        <Window title={file}>
          <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
          {children}
        </Window>
      </div>
    </section>
  );
}
