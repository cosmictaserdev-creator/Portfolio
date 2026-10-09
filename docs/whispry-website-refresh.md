# Whispry website refresh

Reading this as a product website for Android users preparing to install Whispry, in the current app's cream, ink and violet style. Energy 2 / Rhythm 2 / Motion 1.

- Color follows the actual Android UI: cream writing surfaces, dark ink, and violet for writing tools and actions. Light and dark variants have explicit contrast colors.
- The existing portfolio display type and Satoshi body type preserve the site's identity; sentence case makes product and policy text easier to read.
- The hero pairs the current home screen with the keyboard trigger to show the main behavior before presenting Premium.
- Spacing separates everyday dictation, meeting tools, and privacy; the screenshot gallery remains a native horizontal scroller for touch and keyboard users.
- Premium features are divided by borders rather than repeated floating cards. The comparison uses a semantic table with explicit Free and Premium labels.
- Screenshots are existing real Android captures from the store assets, with example content disclosed. They are not generated UI mockups.
- Product pages use static layout and hover feedback; the portfolio's existing motion stays in its established sections.
- Google Play is the install destination. Public source, GitHub APK release data, donation purchasing alternatives, and old AGPL claims were removed from Whispry pages.

## Product evidence

The app's `EntitlementRepository.kt` specifies a one-time `premium_unlock` purchase and a six-hour Pro trial after two rewarded videos. Trial access keeps advertising enabled. The current Pro paywall defines the Free and Premium feature comparison. Meeting use cases gate recording, import, notes and questions behind Pro access; individual transcription and export rewards are separate. Privacy content follows `app/src/main/res/raw/privacy_policy.txt`. Licensing follows the project's proprietary `LICENSE`.

## Play Console URLs after deployment

- Website: https://cosmictaser.de5.net/whispry
- Privacy: https://cosmictaser.de5.net/whispry/privacy
- Support: https://cosmictaser.de5.net/whispry/support
- Data deletion help: https://cosmictaser.de5.net/whispry/data-deletion
- Terms: https://cosmictaser.de5.net/whispry/terms

The website does not itself submit or approve a Google Play release. No user accounts exist in the app; the deletion page explains local deletion and third-party data requests.

## Review evidence

- Build PASS: Next.js production build, TypeScript and Cloudflare worker packaging completed. Changed-page lint completed with no errors.
- Layout PASS: 36 page checks across six product/legal pages, widths 320/390/1440, and light/dark themes; no page overflow and no broken images. Desktop and mobile hero/Premium screenshots were visually reviewed.
- Controls PASS: 16 recorded action groups covering FAQ toggles, native screenshot scrolling, theme switching, and mobile menu open/Escape. Thirteen local link destinations returned successful responses; no browser runtime errors.
- Claims PASS: Premium and trial details follow the entitlement repository and current paywall. Privacy follows the shipped policy and meeting request implementation. No invented ratings, customer testimonials, install counts, prices or guarantees were added.
- Brand/purpose PASS: cream, ink and violet come from the current app, the type comes from the existing portfolio, and real captures show the product. Each section describes dictation, a paid capability, an actual screen, or a user choice. Written design reasons and dials are above.
- Accessibility PASS: comparison uses table headers, controls have labels, the rail is focusable, product focus styles are visible, links have real destinations, and both themes were rendered. Product text colors were selected for AA contrast against their scoped surfaces; shared navigation retains its existing theme styles.

The browser report and review images are saved alongside this document in `whispry-website-review/`. These checks review the website, not the Android app or a Play Console release.

## Deployment configuration

The live browser review exposed a `next-themes` initialization error from Wrangler's default function-name preservation. `wrangler.jsonc` now sets `keep_names: false`, following the [OpenNext guidance](https://opennext.js.org/cloudflare/howtos/keep_names), so serialized theme scripts execute in the browser without an undefined `__name` helper. Dependencies were restored from the existing lockfile to fix the initial esbuild binary mismatch.

Live review PASS: all six Whispry URLs returned HTTP 200 on the custom domain. Product, Premium and privacy pages rendered without overflow or missing visible images; theme switching worked and no browser runtime errors remained. The homepage contains the updated Whispry section. Cloudflare production version: c97858ef-4ec3-4953-84df-2d987fb68e75.
