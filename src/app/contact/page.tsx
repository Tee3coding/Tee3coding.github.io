import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = { title: "Contact | Tee3coding" };

export default function ContactPage() {
  return (
    <div className="px-6 pb-24 pt-32">
      <div className="mx-auto max-w-5xl">
        <PageHeader
          eyebrow="Contact"
          title="Let's work together"
          intro="Have a project or an opportunity in mind? Send a message or reach out directly."
        />
        <div className="grid gap-12 md:grid-cols-2">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="space-y-3 text-sm">
              <li>
                Email:{" "}
                <a className="text-indigo-400 hover:underline" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </li>
              {profile.github && (
                <li>
                  GitHub:{" "}
                  <a className="text-indigo-400 hover:underline" href={profile.github}>
                    {profile.github.replace("https://", "")}
                  </a>
                </li>
              )}
              {profile.linkedin && (
                <li>
                  LinkedIn:{" "}
                  <a className="text-indigo-400 hover:underline" href={profile.linkedin}>
                    {profile.linkedin.replace("https://", "")}
                  </a>
                </li>
              )}
            </ul>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
