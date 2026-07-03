import { CONTACT_EMAIL } from "./site";

// TODO: swap these placeholder handles/URLs for your real profiles.
export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "instagram" | "mail" | "file-text";
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/cosmictaser",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/aryan-sharma-cosmictaser",
    icon: "linkedin",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/cosmictaser",
    icon: "instagram",
  },
  {
    label: "Email",
    href: `mailto:${CONTACT_EMAIL}`,
    icon: "mail",
  },
];

export const linkTree = [
  {
    label: "View my work",
    href: "/projects",
    description: "Android & software projects",
  },
  {
    label: "GitHub",
    href: "https://github.com/cosmictaser",
    description: "Code & open source",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/aryan-sharma-cosmictaser",
    description: "Professional profile",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/cosmictaser",
    description: "@cosmictaser",
  },
  {
    label: "Resume / CV",
    href: "/resume.pdf",
    description: "Download my latest resume",
  },
  {
    label: "Email me",
    href: `mailto:${CONTACT_EMAIL}`,
    description: CONTACT_EMAIL,
  },
];
