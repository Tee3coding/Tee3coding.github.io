import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 text-center text-sm opacity-60">
      <p>
        &copy; {new Date().getFullYear()} {profile.name}. Built with Next.js,
        TypeScript &amp; Framer Motion.
      </p>
    </footer>
  );
}
