import { Splash } from "@/components/sections/Splash";
import { Statement } from "@/components/sections/Statement";
import { CenteredWork } from "@/components/sections/CenteredWork";
import { Bento } from "@/components/sections/Bento";
import { WideText } from "@/components/sections/WideText";
import { EyeCenterpiece } from "@/components/sections/EyeCenterpiece";
import { NextApp } from "@/components/sections/NextApp";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Splash />
      <Statement
        intro="aryan sharma is a one-man crew crafting"
        lines={["android", "apps &", "web tools"]}
        outro="from india, for anywhere."
      />
      <Statement
        intro="powered by"
        lines={["restless", "curiosity"]}
        outro="and an unhealthy attachment to clean architecture."
        size="xl"
      />
      <CenteredWork />
      <Bento />
      <WideText />
      <EyeCenterpiece />
      <NextApp />
      <Contact />
    </>
  );
}
