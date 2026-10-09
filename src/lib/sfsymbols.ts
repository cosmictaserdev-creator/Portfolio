// Shared helpers for the SF Symbols catalog. The symbol data lives in
// public/sfsymbols-catalog.json (compact tuples: [appleName, pascalName,
// categories, restricted]) and is fetched client-side so the page shell
// renders instantly.

export type SfSymbol = {
  a: string; // apple dot-name, e.g. "heart.fill"
  p: string; // Kotlin PascalCase, e.g. "SFHeartFill"
  c: string[]; // categories
  r: boolean; // isRestricted
};

export type SfVariant = "dualtone" | "monochrome";

/** Build the copy-paste Kotlin block for a symbol, dualtone-style. */
export function symbolKotlin(sym: SfSymbol, variant: SfVariant): string {
  const object = variant === "dualtone" ? "SfSymbols.Dualtone" : "SfSymbols.Monochrome";
  const pkg = variant === "dualtone" ? "dualtone" : "monochrome";
  return [
    `import com.composables.sfsymbols.SfSymbols`,
    `import com.composables.sfsymbols.${pkg}.${sym.p}`,
    ``,
    `Icon(`,
    `    imageVector = ${object}.${sym.p},`,
    `    contentDescription = null,`,
    `    tint = MaterialTheme.colorScheme.primary,`,
    `    modifier = Modifier.size(24.dp),`,
    `)`,
  ].join("\n");
}
