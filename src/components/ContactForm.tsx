"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";

const field =
  "w-full rounded-md border border-white/15 bg-transparent px-4 py-3 outline-none transition focus:border-indigo-400";

/** Static sites have no backend, so this opens the visitor's email app. */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio message from ${data.get("name")}`);
    const body = encodeURIComponent(
      `${data.get("message")}\n\nReply to: ${data.get("email")}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input name="name" required placeholder="Your name" className={field} />
      <input
        name="email"
        type="email"
        required
        placeholder="Your email"
        className={field}
      />
      <textarea
        name="message"
        required
        rows={5}
        placeholder="Your message"
        className={field}
      />
      <motion.button
        type="submit"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="rounded-md bg-indigo-500 px-6 py-3 font-medium text-white"
      >
        Send message
      </motion.button>
      {sent && (
        <p className="text-sm opacity-70">Opening your email app&hellip;</p>
      )}
    </form>
  );
}
