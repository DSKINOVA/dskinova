/**
 * inject-meta.mjs
 *
 * Runs AFTER vite build (postbuild).
 *
 * Reads dist/index.html and for each route in seo-meta.json,
 * creates a separate HTML file in dist/<slug>/index.html
 * with the correct <title> and <meta description> injected.
 *
 * This means Google/crawlers get page-specific meta tags
 * from the static HTML — no JavaScript execution needed.
 */

import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const distDir = join(root, "dist");
const indexHtml = join(distDir, "index.html");
const seoMetaJson = join(root, "public", "seo-meta.json");

if (!existsSync(indexHtml)) {
  console.error("[inject-meta] dist/index.html not found. Run vite build first.");
  process.exit(1);
}

if (!existsSync(seoMetaJson)) {
  console.error("[inject-meta] public/seo-meta.json not found. Run prepare-seo first.");
  process.exit(0);
}

const baseHtml = readFileSync(indexHtml, "utf8");
const seoMeta = JSON.parse(readFileSync(seoMetaJson, "utf8"));

/**
 * Inject title + description + canonical into HTML string.
 * Uses simple string replace — works reliably on the Vite-generated index.html.
 */
function injectMeta(html, { title, description, keywords, canonical }) {
  // 1. Replace <title>
  html = html.replace(
    /<title>[^<]*<\/title>/i,
    `<title>${escapeHtml(title)}</title>`
  );

  // 2. Replace the id="helmet-desc" meta description
  html = html.replace(
    /(<meta\s[^>]*id="helmet-desc"[^>]*content=")[^"]*"/i,
    `$1${escapeHtml(description)}"`
  );

  // 3. Replace any generic name="description" meta (covers both patterns)
  // Only if not already handled by helmet-desc
  html = html.replace(
    /(<meta\s+name="description"\s+content=")[^"]*"/gi,
    `$1${escapeHtml(description)}"`
  );

  // 3.5. Replace meta name="keywords" with page-specific keywords (unconditional fallback)
  const kwToUse = (keywords && keywords.trim())
    ? keywords
    : `${title.replace(/^Meta Title:\s*/i, "").split("|")[0].trim()}, DSkinova, Skin Specialist in Jaipur`;

  html = html.replace(
    /(<meta\s+name="keywords"\s+content=")[^"]*"/gi,
    `$1${escapeHtml(kwToUse)}"`
  );

  // 4. Replace og:title
  html = html.replace(
    /(<meta\s[^>]*property="og:title"\s*[^>]*content=")[^"]*"/gi,
    `$1${escapeHtml(title)}"`
  );
  html = html.replace(
    /(<meta\s[^>]*content="[^"]*"\s*[^>]*property="og:title"[^>]*\/>)/gi,
    (match) => match.replace(/content="[^"]*"/, `content="${escapeHtml(title)}"`)
  );

  // 5. Replace og:description
  html = html.replace(
    /(<meta\s[^>]*property="og:description"\s*[^>]*content=")[^"]*"/gi,
    `$1${escapeHtml(description)}"`
  );

  // 6. Replace canonical link
  if (canonical) {
    html = html.replace(
      /(<link\s[^>]*rel="canonical"\s[^>]*href=")[^"]*"/gi,
      `$1${canonical}"`
    );
  }

  // 7. Replace og:url
  if (canonical) {
    html = html.replace(
      /(<meta\s[^>]*property="og:url"\s*[^>]*content=")[^"]*"/gi,
      `$1${canonical}"`
    );
  }

  return html;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// Fixed static pages that should have build-time static HTML
const fixedStaticRoutes = ["/", "/about", "/contact", "/gallery", "/wellness", "/news"];

// Process routes
let count = 0;
for (const [route, meta] of Object.entries(seoMeta)) {
  // Service routes are handled dynamically by api/ssr.js for 100% real-time SEO updates!
  if (!fixedStaticRoutes.includes(route)) {
    continue;
  }

  if (route === "/") {
    // Update root index.html directly
    const html = injectMeta(baseHtml, meta);
    writeFileSync(indexHtml, html, "utf8");
    console.log(`[inject-meta] Updated dist/index.html (home)`);
    count++;
    continue;
  }

  // For fixed static pages like /about → dist/about/index.html
  const slug = route.replace(/^\//, "");
  const dirPath = join(distDir, slug);
  const filePath = join(dirPath, "index.html");

  mkdirSync(dirPath, { recursive: true });
  const html = injectMeta(baseHtml, meta);
  writeFileSync(filePath, html, "utf8");
  console.log(`[inject-meta] Created dist/${slug}/index.html`);
  count++;
}

console.log(`[inject-meta] Done. Created ${count} page HTML files.`);
