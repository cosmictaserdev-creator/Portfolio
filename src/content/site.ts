// Set NEXT_PUBLIC_SITE_URL during `opennextjs-cloudflare build` once the
// Workers URL (or a custom domain) is known; canonicals, OG tags, sitemap
// and robots all follow from here.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://cosmictaser.de5.net";
export const PERSON_NAME = "Aryan Sharma";
export const PERSON_ALIAS = "cosmictaser";
export const SITE_DESCRIPTION =
  "Aryan (cosmictaser) is a freelance Android & software developer based in India — maker of Convx, the open-source Liquid Glass music player for Android.";
export const CONTACT_EMAIL = "cosmictaser.dev@gmail.com";
export const LOCATION = "India";
