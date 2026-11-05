// Edit this file to personalise your portfolio. Every page reads from here.

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

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Framer Motion",
  "Tailwind CSS",
  "Node.js",
];

export type Experience = {
  period: string;
  title: string;
  place: string;
  description: string;
};

export const experience: Experience[] = [
  {
    period: "2025 - Present",
    title: "Your Role",
    place: "Company or School",
    description: "Describe what you did and what you achieved.",
  },
  {
    period: "2023 - 2025",
    title: "Previous Role",
    place: "Company or School",
    description: "Add another entry, or delete this one.",
  },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  details: string;
  tags: string[];
  href?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    description: "A short description of what this project does and why it matters.",
    details:
      "Longer write-up: the problem, your approach, the tech you used, and the result. This shows on the project's own page.",
    tags: ["Next.js", "TypeScript"],
    href: "#",
    repo: "#",
  },
  {
    slug: "project-two",
    title: "Project Two",
    description: "Another project. Mention the problem you solved and the result.",
    details: "Longer write-up for project two.",
    tags: ["React", "Framer Motion"],
    href: "#",
    repo: "#",
  },
  {
    slug: "project-three",
    title: "Project Three",
    description: "Replace these placeholders with your real work.",
    details: "Longer write-up for project three.",
    tags: ["Tailwind", "Node.js"],
    href: "#",
    repo: "#",
  },
];
