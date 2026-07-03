import { Marquee } from "@/components/ui/Marquee";
import { techStack } from "@/content/tech-stack";

export function TechMarquee() {
  return (
    <section className="py-4">
      <Marquee items={techStack} />
    </section>
  );
}
