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
      // Fallback if dist/index.html isn't local
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

    // 3. Inject live MongoDB SEO into HTML
    html = html.replace(/<title>(.*?)<\/title>/i, `<title>${escapeHtml(title)}</title>`);
    html = html.replace(
      /(<meta\s+name="description"\s+content=")[^"]*"/i,
      `$1${escapeHtml(description)}"`
    );
    html = html.replace(
      /(<meta\s+name="keywords"\s+content=")[^"]*"/i,
      `$1${escapeHtml(keywords)}"`
    );
    html = html.replace(
      /(<link\s+rel="canonical"\s+href=")[^"]*"/i,
      `$1${escapeHtml(canonicalUrl)}"`
    );
    html = html.replace(
      /(<meta\s+property="og:title"\s+content=")[^"]*"/i,
      `$1${escapeHtml(title)}"`
    );
    html = html.replace(
      /(<meta\s+property="og:description"\s+content=")[^"]*"/i,
      `$1${escapeHtml(description)}"`
    );
    html = html.replace(
      /(<meta\s+property="og:url"\s+content=")[^"]*"/i,
      `$1${escapeHtml(canonicalUrl)}"`
    );
    html = html.replace(
      /(<meta\s+property="og:image"\s+content=")[^"]*"/i,
      `$1${escapeHtml(imageUrl)}"`
    );

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
