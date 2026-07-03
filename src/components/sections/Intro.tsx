import { RevealText } from "@/components/ui/RevealText";

export function Intro() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
      <RevealText
        as="h2"
        className="max-w-4xl text-clamp-lg lowercase text-foreground"
      >
        MCA graduate turned freelance developer, currently building Android
        apps and web products for clients across India and beyond.
      </RevealText>
      <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
        I care about the small details most people skip — smooth animations,
        offline-first data, and interfaces that feel instant. When I&apos;m
        not shipping apps, I&apos;m usually tinkering with new tools or
        refining old projects.
      </p>
    </section>
  );
}
