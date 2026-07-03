import { RevealText } from "@/components/ui/RevealText";

/**
 * The recurring editorial pattern: small uppercase intro line, huge
 * lowercase accent heading (char scroll-reveal), small outro line.
 */
export function Statement({
  intro,
  lines,
  outro,
  size = "xxl",
}: {
  intro: string;
  lines: string[];
  outro?: string;
  size?: "xl" | "xxl";
}) {
  return (
    <section className="px-6 py-28 sm:px-10 sm:py-40">
      <div className="mx-auto max-w-6xl">
        <h2 className="flex flex-col items-start">
          <span className="max-w-[30ch] pl-4 font-sans text-base font-normal uppercase leading-normal tracking-normal sm:pl-16">
            {intro}
          </span>
          <RevealText
            as="span"
            className={`h2 my-4 block pl-4 font-display lowercase leading-[0.92] text-accent sm:pl-16 ${
              size === "xxl" ? "text-clamp-xxl" : "text-clamp-xl"
            }`}
          >
            {lines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </RevealText>
          {outro ? (
            <span className="max-w-[34ch] pl-4 font-sans text-base font-normal uppercase leading-normal tracking-normal sm:pl-16">
              {outro}
            </span>
          ) : null}
        </h2>
      </div>
    </section>
  );
}
