import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  try {
    const rawSlug = req.query.slug || req.url.replace(/^\//, "").split("?")[0];
    const cleanSlug = rawSlug.trim().toLowerCase();

    // 1. Read static index.html template
    const indexPath = path.join(process.cwd(), "dist", "index.html");
    let html = "";
    if (fs.existsSync(indexPath)) {
      html = fs.readFileSync(indexPath, "utf-8");
    } else {
      const baseRes = await fetch("https://www.dskinova.com/index.html");
      html = await baseRes.text();
    }

    // Static pages that shouldn't be overridden as services
    const staticPages = ["about", "contact", "gallery", "wellness", "news", "admin-login", "admin-dashboard", "reviews-demo"];
    if (!cleanSlug || staticPages.includes(cleanSlug)) {
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      return res.status(200).send(html);
    }

    // 2. Fetch live service SEO data from MongoDB API
    const apiRes = await fetch(`https://dskinova-server.vercel.app/api/services/${cleanSlug}`);
    if (!apiRes.ok) {
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      return res.status(200).send(html);
    }

    const data = await apiRes.json();
    if (!data.success || !data.item) {
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      return res.status(200).send(html);
    }

    const item = data.item;
    const rawTitle = item.seo?.meta_title || item.title || "DSkinova Skin Clinic";
    const title = rawTitle.replace(/^Meta Title:\s*/i, "").trim();
    const description = item.seo?.meta_description || item.short || "Expert skin & hair treatments in Jaipur at DSkinova.";
    const keywords = (item.seo?.focus_keyphrase && item.seo.focus_keyphrase.trim())
      ? item.seo.focus_keyphrase.trim()
      : `${title.split('|')[0].trim()}, DSkinova, Skin Specialist in Jaipur`;
    const canonicalUrl = `https://www.dskinova.com/${item.slug || cleanSlug}`;
    const imageUrl = item.image || "https://www.dskinova.com/logo.png";

    // Helper escape
    const escapeHtml = (str) =>
      String(str || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

    // 3. Remove old tags to prevent duplicate or stale meta
    html = html.replace(/<title[\s\S]*?<\/title>/gi, "");
    html = html.replace(/<meta\s+[^>]*name=["']description["'][^>]*\/?>/gi, "");
    html = html.replace(/<meta\s+[^>]*name=["']keywords["'][^>]*\/?>/gi, "");
    html = html.replace(/<meta\s+[^>]*property=["']og:title["'][^>]*\/?>/gi, "");
    html = html.replace(/<meta\s+[^>]*property=["']og:description["'][^>]*\/?>/gi, "");
    html = html.replace(/<meta\s+[^>]*property=["']og:url["'][^>]*\/?>/gi, "");
    html = html.replace(/<meta\s+[^>]*property=["']og:image["'][^>]*\/?>/gi, "");
    html = html.replace(/<link\s+[^>]*rel=["']canonical["'][^>]*\/?>/gi, "");

    // 4. Inject clean fresh live SEO block into <head>
    const cleanSeoBlock = `
    <!-- Live Admin SEO Injection -->
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="keywords" content="${escapeHtml(keywords)}" />
    <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />
    <meta property="og:image" content="${escapeHtml(imageUrl)}" />
    `;

    html = html.replace("</head>", `${cleanSeoBlock}\n  </head>`);

    // Disable caching on serverless HTML so view-source always gets live MongoDB data!
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    return res.status(200).send(html);
  } catch (err) {
    console.error("SSR handler error:", err);
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    return res.status(500).send("Server Error");
  }
}
