import Section from "../Section";
import Timeline from "../Timeline";
import { experience } from "@/data/portfolio";

export default function Work() {
  return (
    <Section id="work" title="Work Experience">
      <Timeline items={experience} />
    </Section>
  );
}
