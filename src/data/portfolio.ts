// Edit this file to personalise your portfolio. Every page reads from here.

export const profile = {
  name: "Tee Jun Hong",
  role: "Software Engineering Student",
  tagline:"",
  about:"",
  email: "teejunhong788@gmail.com",
  github: "https://github.com/Tee3coding",
  linkedin: "https://linkedin.com/in/jun-hong-tee-26638b306/",
};

// Each href is the id of a section on the single page.
export const navLinks = [
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

// The tabs shown above the skill tiles ("All" is added automatically).
export const skillCategories = ["Languages", "Frameworks", "Tools"] as const;
export type SkillCategory = (typeof skillCategories)[number];

export type Skill = {
  name: string;
  category: SkillCategory;
  // Key into the icon map in src/components/sections/Skills.tsx
  icon: string;
  // Shows a small "Basic" label under the name
  basic?: boolean;
};

export const skills: Skill[] = [
  { name: "PHP", category: "Languages", icon: "php" },
  { name: "SQL", category: "Languages", icon: "sql" },
  { name: "Python", category: "Languages", icon: "python" },
  { name: "JavaScript", category: "Languages", icon: "javascript" },
  { name: "TypeScript", category: "Languages", icon: "typescript" },
  { name: "HTML", category: "Languages", icon: "html" },
  { name: "CSS", category: "Languages", icon: "css" },
  { name: "Java", category: "Languages", icon: "java", basic: true },
  { name: "C++", category: "Languages", icon: "cpp", basic: true },
  { name: "Flutter", category: "Frameworks", icon: "flutter" },
  { name: "Node.js", category: "Frameworks", icon: "nodejs" },
  { name: "React", category: "Frameworks", icon: "react", basic: true },
  { name: "Next.js", category: "Frameworks", icon: "nextjs" },
  { name: "Tailwind CSS", category: "Frameworks", icon: "tailwind" },
  { name: "Framer Motion", category: "Frameworks", icon: "framer" },
  { name: "Git", category: "Tools", icon: "git" },
  { name: "GitHub", category: "Tools", icon: "github" },
  { name: "VS Code", category: "Tools", icon: "vscode" },
  { name: "MySQL", category: "Tools", icon: "mysql" },
  { name: "Postman", category: "Tools", icon: "postman" },
];

export type Experience = {
  period: string;
  title: string;
  place: string;
  description: string;
};

export const experience: Experience[] = [
  {
    period: "Aug 2024 - Dec 2024",
    title: "Software Engineer",
    place: "IPS Software SDN BHD, Selangor",
    description:
      "Built and updated ecommerce web pages and features using PHP, HTML and CSS, with some JavaScript for simple features such as form checks. Debugged code and SQL queries, did basic testing, and worked with the team using Git and daily stand-ups.",
  },
];

export const education: Experience[] = [
  {
    period: "2025 - present",
    title: "Bachelor of Software Engineering",
    place: "Sunway University, Selangor",
    description: "",
  },
  {
    period: "2023 - 2024",
    title: "Diploma in Information Technology",
    place: "Sunway College, Selangor",
    description: "",
  },
  {
    period: "2017 - 2023",
    title: "SPM and UEC",
    place: "SBR Chong Hwa High School, Johor",
    description: "",
  },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  details: string;
  tags: string[];
  // Screenshot shown on the left of the row. Put the file in public/projects/
  // and use e.g. "/projects/ecosnap.png". A placeholder shows while empty.
  image?: string;
  href?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: "ecosnap",
    title: "EcoSnap",
    description:
      "Degree final year project: a full-stack recycling rewards platform with a Flutter app and a web admin site.",
    details:
      "EcoSnap is a full-stack recycling rewards platform, with a Flutter app for residents and a web admin site backed by a Node.js/Express and MySQL API. Residents photograph recyclable items for Gemini AI to classify, then earn points they can use to book branch drop-offs and redeem vouchers, while admins review submissions and manage rewards, locations and a Gemini-powered recycling chatbot.",
    tags: ["Flutter", "Node.js", "Express", "MySQL", "Gemini AI"],
  },
  {
    slug: "retailos",
    title: "RetailOS",
    description:
      "Self project: a multi-outlet e-commerce system with outlet-based stock and a role-based admin.",
    details:
      "A multi-outlet e-commerce system built with Laravel, React, TypeScript and MySQL, featuring outlet-based stock, online checkout, and a role-based admin for orders, inventory, promotions and reporting. It includes a promotion engine, membership tiers, and background jobs for emails, exports and scheduled reports.",
    tags: ["Laravel", "React", "TypeScript", "MySQL"],
  },
  {
    slug: "wheremymoney",
    title: "Wheremymoney",
    description:
      "Self project: an Android personal finance app in Python and Flet with budgets, charts and app lock.",
    details:
      "An Android personal finance app in Python and Flet that tracks income and expenses with a calculator-style entry sheet, monthly budgets, charts, a calendar view, search and filters, and local SQLite storage with JSON backup and restore. It adds a PIN app lock with fingerprint unlock, plus a native Java quick-add notification and tap vibration, wired to the Python app and packaged with a one-command APK build script.",
    tags: ["Python", "Flet", "SQLite", "Java", "Android"],
  },
];
