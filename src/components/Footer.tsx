"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { LuArrowUp, LuMail } from "react-icons/lu";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { profile } from "@/data/portfolio";

const iconClass =
  "flex h-10 w-10 items-center justify-center border border-foreground transition-colors hover:bg-foreground hover:text-background";

function IconLink({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <motion.a
      href={href}
      aria-label={label}
      title={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      whileTap={{ scale: 0.92 }}
      className={iconClass}
    >
      {children}
    </motion.a>
  );
}

/** Taskbar-style footer. Its id is the "Contact" anchor. */
export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-foreground bg-background px-4 py-3 sm:px-6"
    >
      <ul className="flex items-center justify-center gap-3">
        {profile.email && (
          <li>
            <IconLink label="Email" href={`mailto:${profile.email}`}>
              <LuMail className="h-5 w-5" aria-hidden />
            </IconLink>
          </li>
        )}
        {profile.github && (
          <li>
            <IconLink label="GitHub" href={profile.github}>
              <SiGithub className="h-5 w-5" aria-hidden />
            </IconLink>
          </li>
        )}
        {profile.linkedin && (
          <li>
            <IconLink label="LinkedIn" href={profile.linkedin}>
              <FaLinkedin className="h-5 w-5" aria-hidden />
            </IconLink>
          </li>
        )}
        <li aria-hidden className="mx-1 h-6 w-px bg-foreground/40" />
        <li>
          <motion.button
            type="button"
            aria-label="Back to top"
            title="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileTap={{ scale: 0.92 }}
            className={iconClass}
          >
            <LuArrowUp className="h-5 w-5" aria-hidden />
          </motion.button>
        </li>
      </ul>
    </footer>
  );
}
