"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { agents } from "@/data/hidden";

const stripes =
  "repeating-linear-gradient(115deg, rgba(255,255,255,0.035) 0 2px, transparent 2px 22px)";

export default function AgentSelect() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const reduce = useReducedMotion();
  const agent = agents[index];
  const shift = reduce ? 0 : 140;

  // Arrow keys move through the roster.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const forward = e.key === "ArrowDown" || e.key === "ArrowRight";
      const back = e.key === "ArrowUp" || e.key === "ArrowLeft";
      if (!forward && !back) return;
      e.preventDefault();
      setDir(forward ? 1 : -1);
      setIndex((i) => (i + (forward ? 1 : -1) + agents.length) % agents.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const select = (i: number) => {
    if (i === index) return;
    setDir(i > index ? 1 : -1);
    setIndex(i);
  };

  const slide = {
    enter: (d: number) => ({ x: d * shift, opacity: 0, skewX: reduce ? 0 : -8 * d }),
    center: { x: 0, opacity: 1, skewX: 0 },
    exit: (d: number) => ({ x: -d * shift, opacity: 0, skewX: reduce ? 0 : 8 * d }),
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={
        { "--accent": agent.accent, backgroundImage: stripes } as CSSProperties
      }
    >
      {/* Giant outlined name behind everything */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.12]"
      >
        <AnimatePresence mode="wait" custom={dir}>
          <motion.p
            key={agent.id + "-bg"}
            custom={dir}
            variants={slide}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute -right-4 top-10 select-none whitespace-nowrap text-[22vw] font-black italic leading-none"
            style={{ WebkitTextStroke: "2px var(--accent)", color: "transparent" }}
          >
            {agent.name}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-8 px-6 py-10 lg:grid-cols-[260px_1fr]">
        {/* Roster */}
        <div
          role="tablist"
          aria-label="Select a project"
          className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pt-16"
        >
          {agents.map((a, i) => {
            const active = i === index;
            return (
              <button
                key={a.id}
                role="tab"
                aria-selected={active}
                onClick={() => select(i)}
                className="relative min-w-40 -skew-x-12 overflow-hidden border border-white/15 text-left"
              >
                {active && (
                  <motion.span
                    layoutId="roster-highlight"
                    className="absolute inset-0"
                    style={{ background: "var(--accent)" }}
                    transition={{ type: "spring", stiffness: 500, damping: 38 }}
                  />
                )}
                <span
                  className={`relative block skew-x-12 px-5 py-4 ${
                    active ? "text-black" : "text-white/70"
                  }`}
                >
                  <span className="block font-mono text-[10px] opacity-70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="block text-lg font-black italic tracking-wide">
                    {a.name}
                  </span>
                </span>
              </button>
            );
          })}
          <p className="hidden pt-4 font-mono text-xs opacity-40 lg:block">
            Use arrow keys
          </p>
        </div>

        {/* Detail */}
        <div className="relative min-h-[34rem]">
          <AnimatePresence mode="popLayout" custom={dir} initial={false}>
            <motion.div
              key={agent.id}
              custom={dir}
              variants={slide}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid gap-8 md:grid-cols-[1fr_1fr]"
            >
              {/* Portrait placeholder: replace with an image */}
              <div
                className="relative flex aspect-[3/4] items-end justify-start overflow-hidden"
                style={{
                  clipPath: "polygon(12% 0, 100% 0, 88% 100%, 0 100%)",
                  background:
                    "linear-gradient(160deg, var(--accent), rgba(0,0,0,0.85) 75%)",
                }}
              >
                <span className="absolute right-6 top-2 text-[12rem] font-black italic leading-none text-black/30">
                  {agent.name[0]}
                </span>
                <span className="relative p-6 font-mono text-xs text-black/70">
                  PORTRAIT / IMAGE HERE
                </span>
              </div>

              <div className="flex flex-col justify-center">
                <p className="font-mono text-xs" style={{ color: "var(--accent)" }}>
                  {agent.title}
                </p>
                <h2 className="mt-1 text-5xl font-black italic tracking-tight">
                  {agent.name}
                </h2>
                <p className="mt-4 text-sm opacity-75">{agent.description}</p>

                <ul className="mt-6 space-y-3">
                  {agent.stats.map((s, i) => (
                    <li key={s.label}>
                      <div className="mb-1 flex justify-between font-mono text-xs">
                        <span>{s.label}</span>
                        <span>{s.value}</span>
                      </div>
                      <div className="h-1.5 -skew-x-12 bg-white/10">
                        <motion.div
                          className="h-full"
                          style={{ background: "var(--accent)" }}
                          initial={{ width: 0 }}
                          animate={{ width: `${s.value}%` }}
                          transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2 font-mono text-xs">
                  {agent.tags.map((t) => (
                    <li
                      key={t}
                      className="border px-3 py-1"
                      style={{ borderColor: "var(--accent)" }}
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex gap-4 text-sm font-semibold">
                  {agent.href && (
                    <motion.a
                      href={agent.href}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.96 }}
                      className="-skew-x-12 px-6 py-3 text-black"
                      style={{ background: "var(--accent)" }}
                    >
                      <span className="inline-block skew-x-12">Live demo</span>
                    </motion.a>
                  )}
                  {agent.repo && (
                    <motion.a
                      href={agent.repo}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.96 }}
                      className="-skew-x-12 border border-white/30 px-6 py-3"
                    >
                      <span className="inline-block skew-x-12">Source</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
