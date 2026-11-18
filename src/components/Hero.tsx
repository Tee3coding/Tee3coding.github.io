"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { LuMail } from "react-icons/lu";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import Window from "./Window";
import { profile } from "@/data/portfolio";

const retroButton =
  "inline-block border border-foreground px-5 py-2 text-sm shadow-[4px_4px_0_var(--muted)]";

export default function Hero() {
  // The intro section is the "desktop" the windows can be dragged around.
  const desktop = useRef<HTMLElement>(null);

  const links = [
    { label: "email", href: profile.email && `mailto:${profile.email}`, Icon: LuMail },
    { label: "github", href: profile.github, Icon: SiGithub },
    { label: "linkedin", href: profile.linkedin, Icon: FaLinkedin },
  ].filter((l) => l.href);

  return (
    <section
      id="home"
      ref={desktop}
      className="relative flex min-h-screen items-center px-4 pb-12 pt-24 sm:px-6"
    >
      <div className="relative mx-auto w-full max-w-5xl">
        <Window
          title="about.txt"
          dragConstraints={desktop}
          className="relative z-10 w-full max-w-2xl"
          bodyClassName="p-6 sm:p-8"
        >
          <p className="text-sm text-muted">Hi, my name is</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-6xl">
            {profile.name}
            <span aria-hidden className="cursor-blink">
              _
            </span>
          </h1>
          <h2 className="mt-3 text-lg text-muted sm:text-2xl">{profile.role}</h2>
          {profile.tagline && (
            <p className="mt-6 max-w-xl text-sm leading-relaxed opacity-85">
              {profile.tagline}
            </p>
          )}
          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a
              href="#skills"
              whileTap={{ x: 3, y: 3, boxShadow: "0 0 0 var(--muted)" }}
              className={`${retroButton} bg-foreground text-background`}
            >
              Read more
            </motion.a>
            <motion.a
              href="#contact"
              whileTap={{ x: 3, y: 3, boxShadow: "0 0 0 var(--muted)" }}
              className={`${retroButton} bg-background`}
            >
              Contact me
            </motion.a>
          </div>
        </Window>

        <Window
          title="contact.lnk"
          dragConstraints={desktop}
          delay={0.15}
          className="relative z-20 mt-6 w-full max-w-60 sm:absolute sm:right-0 sm:top-48 sm:mt-0"
          bodyClassName="p-4"
        >
          <ul className="space-y-1 text-sm">
            {links.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="flex items-center gap-3 px-2 py-1.5 hover:bg-foreground hover:text-background"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </Window>

        <p className="mt-8 hidden text-xs text-muted sm:block">
         
        </p>
      </div>
    </section>
  );
}
