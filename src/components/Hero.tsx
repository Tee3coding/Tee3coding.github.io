"use client";

import { motion, type Variants } from "framer-motion";
import { profile } from "@/data/portfolio";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center px-6">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-5xl"
      >
        <motion.p variants={item} className="mb-4 font-mono text-sm text-indigo-400">
          Hi, my name is
        </motion.p>
        <motion.h1
          variants={item}
          className="text-5xl font-bold tracking-tight sm:text-7xl"
        >
          {profile.name}.
        </motion.h1>
        <motion.h2
          variants={item}
          className="mt-2 text-3xl font-semibold opacity-60 sm:text-5xl"
        >
          {profile.role}.
        </motion.h2>
        <motion.p variants={item} className="mt-6 max-w-xl text-lg opacity-70">
          {profile.tagline}
        </motion.p>
        <motion.div variants={item} className="mt-10">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block rounded-md bg-indigo-500 px-6 py-3 font-medium text-white"
          >
            View my work
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
