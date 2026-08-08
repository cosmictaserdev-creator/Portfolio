import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // Static site + one route handler — no storage backends needed.
  // Add incrementalCache (R2/KV) here if ISR is introduced later.
});
