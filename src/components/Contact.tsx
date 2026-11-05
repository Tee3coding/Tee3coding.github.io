import Reveal from "./Reveal";
import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <h2 className="text-3xl font-bold">Get in touch</h2>
          <p className="mx-auto mt-4 max-w-md opacity-70">
            I&apos;m open to new opportunities. My inbox is always open.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-block rounded-md border border-indigo-400 px-6 py-3 text-indigo-400 transition hover:bg-indigo-400/10"
          >
            Say hello
          </a>
          <div className="mt-8 flex justify-center gap-6 text-sm opacity-70">
            {profile.github && <a href={profile.github}>GitHub</a>}
            {profile.linkedin && <a href={profile.linkedin}>LinkedIn</a>}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
