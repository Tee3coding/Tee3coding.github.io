"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navLinks, profile } from "@/data/portfolio";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur"
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          {profile.name}
        </Link>
        <ul className="flex gap-5 text-sm sm:gap-6">
          {navLinks.map((l) => (
            <li key={l.href} className="relative">
              <Link
                href={l.href}
                className={`transition hover:opacity-100 ${
                  isActive(l.href) ? "opacity-100" : "opacity-60"
                }`}
              >
                {l.label}
              </Link>
              {isActive(l.href) && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 h-0.5 w-full bg-indigo-400"
                />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
