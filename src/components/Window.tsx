"use client";

import { useState, type ReactNode, type RefObject } from "react";
import { AnimatePresence, motion, useDragControls } from "framer-motion";

type WindowProps = {
  /** Shown in the title bar, e.g. "skills.exe" */
  title: string;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
  delay?: number;
  /** Pass a container ref to make the window draggable by its title bar. */
  dragConstraints?: RefObject<HTMLElement | null>;
};

/** A retro desktop window: title bar, minimise button, opens with a pop. */
export default function Window({
  title,
  children,
  className = "",
  bodyClassName = "p-5 sm:p-6",
  delay = 0,
  dragConstraints,
}: WindowProps) {
  const [minimised, setMinimised] = useState(false);
  const controls = useDragControls();
  const draggable = Boolean(dragConstraints);

  return (
    <motion.div
      drag={draggable}
      dragControls={controls}
      dragListener={false}
      dragConstraints={dragConstraints}
      dragMomentum={false}
      dragElastic={0.08}
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.25, delay, ease: "easeOut" }}
      className={`group border border-foreground bg-background shadow-[6px_6px_0_rgba(232,232,232,0.18)] ${className}`}
    >
      <div
        onPointerDown={draggable ? (e) => controls.start(e) : undefined}
        className={`flex select-none items-center justify-between border-b border-foreground px-3 py-1.5 text-xs transition-colors group-hover:bg-foreground group-hover:text-background ${
          draggable ? "cursor-grab touch-none active:cursor-grabbing" : ""
        }`}
      >
        <span>{title}</span>
        <span className="flex items-center gap-3">
          <button
            type="button"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={() => setMinimised((m) => !m)}
            aria-label={minimised ? `Restore ${title}` : `Minimise ${title}`}
            aria-expanded={!minimised}
            className="leading-none hover:opacity-60"
          >
            {minimised ? "□" : "_"}
          </button>
          <span aria-hidden className="leading-none">
            &times;
          </span>
        </span>
      </div>
      <AnimatePresence initial={false}>
        {!minimised && (
          <motion.div
            key="body"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className={bodyClassName}>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
