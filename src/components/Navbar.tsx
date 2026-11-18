"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navLinks } from "@/data/portfolio";

export default function Navbar() {
  const pathname = usePathname();
  const [active, setActive] = useState("");

  // Scroll-spy: highlight the link for the section currently in view.
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const atBottom = () =>
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 4;

    const observer = new IntersectionObserver(
      (entries) => {
        if (atBottom()) return; // the bottom check below owns "contact"
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    els.forEach((el) => observer.observe(el));

    const onScroll = () => {
      if (window.scrollY < 100) setActive("");
      else if (atBottom()) setActive("contact");
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  // The unlisted portfolio has no link back to the public site's navigation.
  if (pathname.startsWith("/123")) return null;

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur"
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-end px-4 py-4 sm:px-6">
        <ul className="flex gap-3 text-xs sm:gap-6 sm:text-sm">
          {navLinks.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <li key={l.href} className="relative">
                <a
                  href={`/${l.href}`}
                  className={`transition hover:opacity-100 ${
                    isActive ? "opacity-100" : "opacity-60"
                  }`}
                >
                  {l.label}
                </a>
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-indigo-400"
                  />
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </motion.header>
  );
}
