// Edit this file to personalise your portfolio.

export const profile = {
  name: "Tee3coding",
  role: "Frontend Developer",
  tagline: "I build fast, accessible and delightful web experiences.",
  about:
    "Write a short paragraph about yourself here: what you build, what you enjoy, and what you're learning right now.",
  email: "junjia031126@gmail.com",
  github: "https://github.com/Tee3coding",
  linkedin: "",
};

export const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Framer Motion",
  "Tailwind CSS",
  "Node.js",
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description: "A short description of what this project does and why it matters.",
    tags: ["Next.js", "TypeScript"],
    href: "#",
    repo: "#",
  },
  {
    title: "Project Two",
    description: "Another project. Mention the problem you solved and the result.",
    tags: ["React", "Framer Motion"],
    href: "#",
    repo: "#",
  },
  {
    title: "Project Three",
    description: "Replace these placeholders with your real work.",
    tags: ["Tailwind", "Node.js"],
    href: "#",
    repo: "#",
  },
];
