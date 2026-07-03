import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Bento } from "@/components/sections/Bento";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Bento />
      <FeaturedProjects />
      <TechMarquee />
      <Contact />
    </>
  );
}
