import { Splash } from "@/components/sections/Splash";
import { Statement } from "@/components/sections/Statement";
import { ConvxShowcase } from "@/components/sections/ConvxShowcase";
import { Bento } from "@/components/sections/Bento";
import { WideText } from "@/components/sections/WideText";
import { EyeCenterpiece } from "@/components/sections/EyeCenterpiece";
import { NextApp } from "@/components/sections/NextApp";
import { Contact } from "@/components/sections/Contact";
import { getReleaseInfo, formatCount } from "@/lib/convx-release";

export default async function Home() {
  const release = await getReleaseInfo();

  return (
    <>
      <Splash />
      <Statement
        intro="aryan sharma is a one-man crew crafting"
        lines={["android", "apps &", "web tools"]}
        outro="from india, for anywhere."
      />
      <ConvxShowcase
        stats={[
          { label: "apk downloads", value: formatCount(release.totalDownloads) },
          { label: "github stars", value: formatCount(release.stars) },
          { label: "latest build", value: release.version },
          { label: "price", value: "free" },
        ]}
      />
      <Statement
        intro="powered by"
        lines={["restless", "curiosity"]}
        outro="and an unhealthy attachment to clean architecture."
        size="xl"
      />
      <Bento />
      <WideText />
      <EyeCenterpiece />
      <NextApp />
      <Contact />
    </>
  );
}
