export type ReleaseInfo = {
  version: string;
  apkUrl: string;
  apkSizeMb: number | null;
  publishedAt: string | null;
  /** APK downloads summed across every release. */
  totalDownloads: number | null;
  stars: number | null;
  /** Markdown-ish body of the latest release, or null. */
  notes: string | null;
};

export type ReleaseTarget = {
  repo: string;
  releasesUrl: string;
  fallbackVersion: string;
  fallbackApkUrl: string;
};

type Asset = { name: string; browser_download_url: string; size: number; download_count: number };
type Release = {
  tag_name: string;
  published_at: string;
  draft: boolean;
  prerelease: boolean;
  body: string | null;
  assets: Asset[];
};

const isApk = (a: Asset) => a.name.toLowerCase().endsWith(".apk");

// Revalidate hourly. Builds run on shared GitHub Actions runner IPs whose
// unauthenticated quota is always exhausted — so authenticate with the
// workflow's GITHUB_TOKEN when one is present (free, 1000 req/hr).
const gh = (repo: string, path: string) =>
  fetch(`https://api.github.com/repos/${repo}${path}`, {
    headers: {
      Accept: "application/vnd.github+json",
      ...(process.env.GITHUB_TOKEN
        ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
        : {}),
    },
    next: { revalidate: 3600 },
  });

export async function getReleaseInfo(target: ReleaseTarget): Promise<ReleaseInfo> {
  const fallback: ReleaseInfo = {
    version: target.fallbackVersion,
    apkUrl: target.fallbackApkUrl,
    apkSizeMb: null,
    publishedAt: null,
    totalDownloads: null,
    stars: null,
    notes: null,
  };

  try {
    const [relRes, repoRes] = await Promise.all([
      gh(target.repo, "/releases?per_page=100"),
      gh(target.repo, ""),
    ]);
    if (!relRes.ok) return fallback;

    const releases: Release[] = await relRes.json();
    const published = releases.filter((r) => !r.draft && !r.prerelease);
    const latest = published[0];
    if (!latest) return fallback;

    const apk = latest.assets.find(isApk);
    const totalDownloads = published.reduce(
      (sum, r) => sum + r.assets.filter(isApk).reduce((s, a) => s + a.download_count, 0),
      0
    );

    const stars = repoRes.ok
      ? ((await repoRes.json()) as { stargazers_count?: number }).stargazers_count ?? null
      : null;

    return {
      version: latest.tag_name,
      apkUrl: apk?.browser_download_url ?? target.releasesUrl,
      apkSizeMb: apk ? Math.round((apk.size / 1024 / 1024) * 10) / 10 : null,
      publishedAt: latest.published_at,
      totalDownloads,
      stars,
      notes: latest.body,
    };
  } catch {
    return fallback;
  }
}

export function formatCount(n: number | null) {
  if (n === null) return "—";
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k`;
  return String(n);
}

/** Pull the bullet lines out of a GitHub release body — no markdown dep. */
export function highlightsFrom(notes: string | null, limit = 9) {
  if (!notes) return [];
  return notes
    .split("\n")
    .filter((line) => /^[-*]\s+\S/.test(line.trim()))
    .map((line) =>
      line
        .trim()
        .replace(/^[-*]\s+/, "")
        .replace(/\*\*/g, "")
        .replace(/`/g, "")
        .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    )
    .slice(0, limit);
}
