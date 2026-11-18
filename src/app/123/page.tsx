import type { Metadata } from "next";
import AgentSelect from "@/components/AgentSelect";
import { hiddenProfile } from "@/data/hidden";

// Unlisted: asks search engines not to index this page. Not a security measure.
export const metadata: Metadata = {
  title: `${hiddenProfile.name} | Select`,
  robots: { index: false, follow: false },
};

export default function UnlistedShowcasePage() {
  return <AgentSelect />;
}
