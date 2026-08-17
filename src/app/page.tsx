import { Splash } from "@/components/sections/Splash";
import { Statement } from "@/components/sections/Statement";
import { ConvxShowcase } from "@/components/sections/ConvxShowcase";
import { WhispryShowcase } from "@/components/sections/WhispryShowcase";
import { Bento } from "@/components/sections/Bento";
import { WideText } from "@/components/sections/WideText";
import { EyeCenterpiece } from "@/components/sections/EyeCenterpiece";
import { NextApp } from "@/components/sections/NextApp";
import { Contact } from "@/components/sections/Contact";
import { getReleaseInfo, formatCount } from "@/lib/github-release";
import { CONVX } from "@/content/convx";
import { WHISPRY } from "@/content/whispry";

export default async function Home() {
  const [convxRelease, whispryRelease] = await Promise.all([
    getReleaseInfo(CONVX),
    getReleaseInfo(WHISPRY),
  ]);

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
          { label: "apk downloads", value: formatCount(convxRelease.totalDownloads) },
          { label: "github stars", value: formatCount(convxRelease.stars) },
          { label: "latest build", value: convxRelease.version },
          { label: "price", value: "free" },
        ]}
      />
      <WhispryShowcase
        stats={[
          { label: "apk downloads", value: formatCount(whispryRelease.totalDownloads) },
          { label: "github stars", value: formatCount(whispryRelease.stars) },
          { label: "latest build", value: whispryRelease.version },
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
