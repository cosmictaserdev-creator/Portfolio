# cosmictaser — portfolio

Aryan Sharma's (cosmictaser) portfolio site. Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + GSAP + Lenis.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Placeholder content to swap in

- `src/content/projects.ts` — project case studies (titles, copy, tech, links). Thumbnails are CSS gradients, not screenshots — swap `ProjectCard`/the `[slug]` page over to real images whenever you have them.
- `src/content/links.ts` — GitHub/LinkedIn/Instagram URLs and the link-tree page (`/links`) entries, including the `/resume.pdf` link (add that file to `public/`).
- `src/content/site.ts` — site URL, contact email, description used in metadata/JSON-LD.

## Contact form

The form at `/#contact` posts to `src/app/api/contact/route.ts`, which sends via [Resend](https://resend.com). Without an API key it still responds successfully and the UI shows a "reach out directly" fallback instead of erroring.

```bash
cp .env.example .env.local
# then set RESEND_API_KEY=re_...
```

## Deploying

Zero-config on [Vercel](https://vercel.com/new) — connect the repo and add `RESEND_API_KEY` as an environment variable. Update `SITE_URL` in `src/content/site.ts` to your real domain before deploying (it feeds metadata, the sitemap, and JSON-LD).

## Stack notes

- Fonts (Clash Display, Satoshi) are self-hosted variable fonts from Fontshare, loaded via `next/font/local`.
- Dark/light theme via `next-themes`, defaulting to dark.
- Smooth scroll (Lenis) and scroll-triggered reveals (GSAP `ScrollTrigger`/`SplitText`) are deferred to idle/near-viewport so they don't compete with first paint — see `src/lib/idle.ts`.
- All motion respects `prefers-reduced-motion`.
