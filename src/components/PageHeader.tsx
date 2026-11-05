import Reveal from "./Reveal";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  intro?: string;
};

export default function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <header className="mb-12">
      <Reveal>
        <p className="mb-2 font-mono text-sm text-indigo-400">{eyebrow}</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        {intro && <p className="mt-4 max-w-2xl opacity-70">{intro}</p>}
      </Reveal>
    </header>
  );
}
