import StickySteps from "./StickySteps";
import { process } from "@/content/site";

export default function ProcessSection() {
  return (
    <StickySteps
      id="process"
      eyebrow="02 / How we work"
      title="Five steps. No mystery."
      lede="You always know what's being built this week, what it costs, and what comes next."
      steps={process}
    />
  );
}
