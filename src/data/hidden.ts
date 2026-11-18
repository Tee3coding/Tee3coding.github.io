// Content for the unlisted showcase at /123/. Edit freely.

export const hiddenProfile = {
  name: "Your Name",
  tagline: "Select a project",
  email: "teejunhong788@gmail.com",
};

export type Agent = {
  id: string;
  name: string; // shown big, keep it short
  title: string; // small line under the name
  description: string;
  accent: string; // any CSS colour
  stats: { label: string; value: number }[]; // value 0-100
  tags: string[];
  href?: string;
  repo?: string;
};

export const agents: Agent[] = [
  {
    id: "alpha",
    name: "ALPHA",
    title: "Project One / Web App",
    description:
      "Describe the project: the problem, your approach and the result. Replace this text with your own.",
    accent: "#facc15",
    stats: [
      { label: "Design", value: 85 },
      { label: "Performance", value: 92 },
      { label: "Complexity", value: 70 },
    ],
    tags: ["Next.js", "TypeScript"],
    href: "#",
    repo: "#",
  },
  {
    id: "bravo",
    name: "BRAVO",
    title: "Project Two / Animation",
    description: "Another project. Mention the tech and what you are proud of.",
    accent: "#f472b6",
    stats: [
      { label: "Design", value: 95 },
      { label: "Performance", value: 80 },
      { label: "Complexity", value: 60 },
    ],
    tags: ["React", "Framer Motion"],
    href: "#",
    repo: "#",
  },
  {
    id: "charlie",
    name: "CHARLIE",
    title: "Project Three / Tooling",
    description: "A third project. Add or remove agents in src/data/hidden.ts.",
    accent: "#38bdf8",
    stats: [
      { label: "Design", value: 65 },
      { label: "Performance", value: 90 },
      { label: "Complexity", value: 88 },
    ],
    tags: ["Node.js", "Tailwind"],
    href: "#",
    repo: "#",
  },
];
