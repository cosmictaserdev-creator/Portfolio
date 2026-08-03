// Set NEXT_PUBLIC_SITE_URL in Netlify once a custom domain is attached;
// canonicals, OG tags, sitemap and robots all follow from here.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://cosmic-taser.netlify.app";
export const PERSON_NAME = "Aryan Sharma";
export const PERSON_ALIAS = "cosmictaser";
export const SITE_DESCRIPTION =
  "Aryan (cosmictaser) is a freelance Android & software developer based in India — maker of Convx, the open-source Liquid Glass music player for Android.";
export const CONTACT_EMAIL = "cosmictaser.dev@gmail.com";
export const LOCATION = "India";
