/**
 * prepare-seo.mjs
 *
 * Runs BEFORE vite build (npm run prebuild).
 *
 * What it does:
 *  1. Copies logo.png to public/
 *  2. Writes robots.txt
 *  3. Generates a meta-map JSON (public/seo-meta.json) used by the post-build step
 *
 * AFTER vite build we also run inject-meta.mjs which reads dist/index.html
 * and creates per-page HTML files with correct <title> & <meta description>.
 */

import { mkdirSync, copyFileSync, existsSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const srcLogo = join(root, "Images", "Header", "logo.png");
const publicDir = join(root, "public");
const publicLogo = join(publicDir, "logo.png");
const robotsFile = join(publicDir, "robots.txt");
const sitemapFile = join(publicDir, "sitemap.xml");

// ── All pages + services SEO meta ─────────────────────────────────────────────
export const SEO_META = {
  // Static pages
  "/": {
    title: "Skin Specialist in Jaipur | Trusted Dermatologist for Healthy Skin",
    description:
      "Skin Doctor in Jaipur, Dskinova provides expert skincare, acne, and anti-aging treatments for glowing skin. Book your consultation today!",
    canonical: "https://www.dskinova.com/",
  },
  "/about": {
    title: "About Us | DSkinova — Skin Specialist in Jaipur",
    description:
      "Meet DSkinova's expert skin specialists and cosmetologists in Jaipur. Learn about our mission, advanced skincare treatments, and how we work.",
    canonical: "https://www.dskinova.com/about",
  },
  "/contact": {
    title: "Contact Us | DSkinova Skin Clinic Jaipur",
    description:
      "Contact DSkinova skin clinic in Jaipur. Book your appointment, get directions, or reach us by phone or email for expert skincare consultations.",
    canonical: "https://www.dskinova.com/contact",
  },
  "/gallery": {
    title: "Gallery | DSkinova Skin Clinic Jaipur",
    description:
      "Explore DSkinova's gallery — real results, clinic moments, and before & after transformations from Jaipur's trusted skin specialist.",
    canonical: "https://www.dskinova.com/gallery",
  },
  "/wellness": {
    title: "Wellness Programs | DSkinova — Skin Health Jaipur",
    description:
      "Discover DSkinova's wellness programs designed for long-term skin health. Evidence-backed treatments, personalised care plans, and expert guidance in Jaipur.",
    canonical: "https://www.dskinova.com/wellness",
  },
  "/news": {
    title: "News & Updates | DSkinova Skin Clinic Jaipur",
    description:
      "Stay updated with the latest skincare news, tips, and clinic updates from DSkinova — Jaipur's trusted skin specialist.",
    canonical: "https://www.dskinova.com/news",
  },

  // ── Service pages ────────────────────────────────────────────────────────────
  "/anti-aging": {
    title: "Anti-Aging Treatment in Jaipur | DSkinova",
    description:
      "Advanced anti-aging facial treatments in Jaipur. Reduce fine lines, wrinkles, and age spots with expert care at DSkinova skin clinic.",
    canonical: "https://www.dskinova.com/anti-aging",
  },
  "/anti-aging-in-jaipur": {
    title: "Anti-Aging Treatment in Jaipur | DSkinova",
    description:
      "Advanced anti-aging facial treatments in Jaipur. Reduce fine lines, wrinkles, and age spots with expert care at DSkinova skin clinic.",
    canonical: "https://www.dskinova.com/anti-aging-in-jaipur",
  },
  "/deep-peelings": {
    title: "Deep Peelings Treatment in Jaipur | DSkinova",
    description:
      "Professional deep peeling treatments in Jaipur to remove dead skin, reduce pigmentation and reveal fresh glowing skin at DSkinova.",
    canonical: "https://www.dskinova.com/deep-peelings",
  },
  "/facials": {
    title: "Facial Treatments in Jaipur | DSkinova Skin Clinic",
    description:
      "Rejuvenating facial treatments in Jaipur by expert cosmetologists. Customised facials for all skin types at DSkinova.",
    canonical: "https://www.dskinova.com/facials",
  },
  "/laser-hair-removal": {
    title: "Laser Hair Removal in Jaipur | DSkinova",
    description:
      "Permanent laser hair removal treatment in Jaipur. Safe, effective, and affordable laser hair removal by certified skin specialists at DSkinova.",
    canonical: "https://www.dskinova.com/laser-hair-removal",
  },
  "/laser-hair-removal-treatment-in-jaipur": {
    title: "Laser Hair Removal Treatment in Jaipur | DSkinova",
    description:
      "Permanent laser hair removal treatment in Jaipur. Safe, effective, and affordable laser hair removal by certified skin specialists at DSkinova.",
    canonical:
      "https://www.dskinova.com/laser-hair-removal-treatment-in-jaipur",
  },
  "/laser-skin-therapy": {
    title: "Laser Skin Therapy in Jaipur | DSkinova",
    description:
      "Advanced laser skin therapy in Jaipur for skin rejuvenation, pigmentation, acne scars, and more. Expert care at DSkinova.",
    canonical: "https://www.dskinova.com/laser-skin-therapy",
  },
  "/mesotherapy": {
    title: "Mesotherapy Treatment in Jaipur | DSkinova",
    description:
      "Mesotherapy skin treatment in Jaipur for skin hydration, hair loss, and anti-aging. Administered by certified specialists at DSkinova.",
    canonical: "https://www.dskinova.com/mesotherapy",
  },
  "/microdermabrasion": {
    title: "Microdermabrasion in Jaipur | DSkinova Skin Clinic",
    description:
      "Microdermabrasion skin resurfacing treatment in Jaipur. Remove dead skin cells and improve skin texture at DSkinova.",
    canonical: "https://www.dskinova.com/microdermabrasion",
  },
  "/pigmentation-solutions": {
    title: "Pigmentation Treatment in Jaipur | DSkinova",
    description:
      "Expert pigmentation and dark spot treatment in Jaipur. DSkinova offers advanced corrective protocols for uneven skin tone.",
    canonical: "https://www.dskinova.com/pigmentation-solutions",
  },
  "/skin-tightening": {
    title: "Skin Tightening Treatment in Jaipur | DSkinova",
    description:
      "Non-surgical skin tightening treatment in Jaipur. Stimulate collagen for firmer, lifted facial contours at DSkinova.",
    canonical: "https://www.dskinova.com/skin-tightening",
  },
  "/hair-prp": {
    title: "Hair PRP Treatment in Jaipur | DSkinova",
    description:
      "Hair PRP (Platelet-Rich Plasma) therapy in Jaipur for hair regrowth and hair fall control. Expert treatment at DSkinova.",
    canonical: "https://www.dskinova.com/hair-prp",
  },
  "/hair-gfc": {
    title: "Hair GFC Treatment in Jaipur | DSkinova",
    description:
      "Hair GFC (Growth Factor Concentrate) therapy in Jaipur for effective hair regrowth. Advanced hair treatment at DSkinova.",
    canonical: "https://www.dskinova.com/hair-gfc",
  },
  "/hair-regrowth-laser": {
    title: "Laser Hair Regrowth Treatment in Jaipur | DSkinova",
    description:
      "Laser-assisted hair regrowth treatment in Jaipur. Clinically proven technology for hair loss and alopecia at DSkinova.",
    canonical: "https://www.dskinova.com/hair-regrowth-laser",
  },
  "/korean-skin-treatment": {
    title: "Korean Skin Treatment in Jaipur | DSkinova",
    description:
      "Korean skin treatment and glass skin facials in Jaipur. Experience K-beauty inspired skincare at DSkinova skin clinic.",
    canonical: "https://www.dskinova.com/korean-skin-treatment",
  },
  "/korean-facial": {
    title: "Korean Facial in Jaipur | DSkinova Skin Clinic",
    description:
      "Authentic Korean facial treatment in Jaipur for glowing, glass skin. Book your K-beauty session at DSkinova today.",
    canonical: "https://www.dskinova.com/korean-facial",
  },
  "/botox-treatment": {
    title: "Botox Treatment in Jaipur | DSkinova",
    description:
      "Safe and effective Botox treatment in Jaipur to reduce wrinkles and fine lines. Administered by certified skin specialists at DSkinova.",
    canonical: "https://www.dskinova.com/botox-treatment",
  },
  "/cryo-fat-freezing": {
    title: "Cryo Fat Freezing Treatment in Jaipur | DSkinova",
    description:
      "Non-invasive cryo fat freezing body contouring in Jaipur. Reduce stubborn fat without surgery at DSkinova skin clinic.",
    canonical: "https://www.dskinova.com/cryo-fat-freezing",
  },
  "/intralesional-injection": {
    title: "Intralesional Injection Treatment in Jaipur | DSkinova",
    description:
      "Intralesional injection treatment in Jaipur for keloids, cysts, and skin conditions. Expert dermatological care at DSkinova.",
    canonical: "https://www.dskinova.com/intralesional-injection",
  },
  "/pre-bridal-specials": {
    title: "Pre-Bridal Skin Treatment in Jaipur | DSkinova",
    description:
      "Pre-bridal skin and beauty packages in Jaipur for your special day. Glow with DSkinova's customised bridal skincare treatments.",
    canonical: "https://www.dskinova.com/pre-bridal-specials",
  },
  "/laser-tattoo-removal": {
    title: "Laser Tattoo Removal in Jaipur | DSkinova",
    description:
      "Safe and effective laser tattoo removal in Jaipur. Advanced Q-switch laser technology for complete tattoo removal at DSkinova.",
    canonical: "https://www.dskinova.com/laser-tattoo-removal",
  },
  "/stretch-marks": {
    title: "Stretch Marks Treatment in Jaipur | DSkinova",
    description:
      "Effective stretch marks treatment in Jaipur using advanced laser and skin therapies. Visible results at DSkinova skin clinic.",
    canonical: "https://www.dskinova.com/stretch-marks",
  },
  "/hairfall": {
    title: "Hair Fall Treatment in Jaipur | DSkinova",
    description:
      "Expert hair fall and hair loss treatment in Jaipur. Customised solutions for hair regrowth and scalp health at DSkinova.",
    canonical: "https://www.dskinova.com/hairfall",
  },
  "/medical-spa-facials": {
    title: "Medical Spa Facials in Jaipur | DSkinova",
    description:
      "Luxury medical spa facials in Jaipur including Oxygeneo, Carbon, and Photo facials. Rejuvenate your skin at DSkinova.",
    canonical: "https://www.dskinova.com/medical-spa-facials",
  },
  "/hair-transplant": {
    title: "Hair Transplant in Jaipur | DSkinova",
    description:
      "Advanced hair transplant surgery in Jaipur. FUE and FUT hair transplant by experienced surgeons at DSkinova.",
    canonical: "https://www.dskinova.com/hair-transplant",
  },
  "/pigmentation-treatments": {
    title: "Pigmentation Treatments in Jaipur | DSkinova",
    description:
      "Comprehensive pigmentation treatments in Jaipur for melasma, freckles, and dark spots. Expert skin correction at DSkinova.",
    canonical: "https://www.dskinova.com/pigmentation-treatments",
  },
  "/skin-lightening-and-whitening": {
    title: "Skin Lightening & Whitening Treatment in Jaipur | DSkinova",
    description:
      "Professional skin lightening and whitening treatment in Jaipur. Achieve brighter, even-toned skin at DSkinova skin clinic.",
    canonical: "https://www.dskinova.com/skin-lightening-and-whitening",
  },
  "/srf": {
    title: "SRF Treatment in Jaipur | DSkinova Skin Clinic",
    description:
      "SRF (Skin Radio Frequency) treatment in Jaipur for skin tightening and rejuvenation. Non-invasive procedure at DSkinova.",
    canonical: "https://www.dskinova.com/srf",
  },
  "/skin-allergy": {
    title: "Skin Allergy Treatment in Jaipur | DSkinova",
    description:
      "Expert skin allergy diagnosis and treatment in Jaipur. Rashes, hives, and allergic reactions treated at DSkinova.",
    canonical: "https://www.dskinova.com/skin-allergy",
  },
  "/psoriasis": {
    title: "Psoriasis Treatment in Jaipur | DSkinova",
    description:
      "Advanced psoriasis treatment in Jaipur. Manage and control psoriasis symptoms with expert dermatological care at DSkinova.",
    canonical: "https://www.dskinova.com/psoriasis",
  },
  "/eczema": {
    title: "Eczema Treatment in Jaipur | DSkinova",
    description:
      "Effective eczema treatment in Jaipur. Relieve itching, inflammation, and skin dryness with expert care at DSkinova.",
    canonical: "https://www.dskinova.com/eczema",
  },
  "/vitiligo": {
    title: "Vitiligo (White Patch) Treatment in Jaipur | DSkinova",
    description:
      "Vitiligo and white patch treatment in Jaipur. Advanced therapies to restore skin pigmentation at DSkinova.",
    canonical: "https://www.dskinova.com/vitiligo",
  },
  "/alopecia-areata": {
    title: "Alopecia Areata Treatment in Jaipur | DSkinova",
    description:
      "Alopecia areata treatment in Jaipur for patchy hair loss. Expert dermatological treatment for hair regrowth at DSkinova.",
    canonical: "https://www.dskinova.com/alopecia-areata",
  },
  "/dandruff": {
    title: "Dandruff Treatment in Jaipur | DSkinova",
    description:
      "Professional dandruff and scalp treatment in Jaipur. Eliminate dandruff permanently with expert care at DSkinova.",
    canonical: "https://www.dskinova.com/dandruff",
  },
  "/vampire-facial": {
    title: "Vampire Facial (PRP Facial) in Jaipur | DSkinova",
    description:
      "Vampire facial / PRP facial treatment in Jaipur for skin rejuvenation and anti-aging. Natural glow at DSkinova.",
    canonical: "https://www.dskinova.com/vampire-facial",
  },
  "/hydrafacial": {
    title: "HydraFacial Treatment in Jaipur | DSkinova",
    description:
      "HydraFacial skin treatment in Jaipur for deep cleansing, hydration, and glow. Award-winning procedure at DSkinova.",
    canonical: "https://www.dskinova.com/hydrafacial",
  },
  "/skin-doctor-in-jaipur": {
    title: "Skin Doctor in Jaipur | DSkinova",
    description:
      "Looking for a skin doctor in Jaipur? DSkinova offers expert dermatological consultations and advanced skincare treatments.",
    canonical: "https://www.dskinova.com/skin-doctor-in-jaipur",
  },
  "/cosmeologist-in-jaipur": {
    title: "Cosmetologist in Jaipur | DSkinova",
    description:
      "Find the best cosmetologist in Jaipur at DSkinova. Expert beauty and skin treatments for all skin types.",
    canonical: "https://www.dskinova.com/cosmeologist-in-jaipur",
  },
  "/manicure": {
    title: "Manicure Services in Jaipur | DSkinova",
    description:
      "Professional manicure services in Jaipur. Pamper your hands with expert nail and hand care at DSkinova.",
    canonical: "https://www.dskinova.com/manicure",
  },
  "/pedicure": {
    title: "Pedicure Services in Jaipur | DSkinova",
    description:
      "Professional pedicure services in Jaipur. Relax and revive your feet with expert foot care at DSkinova.",
    canonical: "https://www.dskinova.com/pedicure",
  },
  "/fungal": {
    title: "Fungal Infection Treatment in Jaipur | DSkinova",
    description:
      "Expert fungal skin and nail infection treatment in Jaipur. Fast, effective care at DSkinova dermatology clinic.",
    canonical: "https://www.dskinova.com/fungal",
  },
  "/scabies": {
    title: "Scabies Treatment in Jaipur | DSkinova",
    description:
      "Effective scabies treatment in Jaipur. Relieve itching and eliminate the mite infestation with expert care at DSkinova.",
    canonical: "https://www.dskinova.com/scabies",
  },
  "/vitiligo-white-spot": {
    title: "Vitiligo White Spot Treatment in Jaipur | DSkinova",
    description:
      "Vitiligo and white spot treatment in Jaipur. Advanced therapies to restore skin pigmentation at DSkinova.",
    canonical: "https://www.dskinova.com/vitiligo-white-spot",
  },
  "/urticaria": {
    title: "Urticaria (Hives) Treatment in Jaipur | DSkinova",
    description:
      "Urticaria and chronic hives treatment in Jaipur. Expert allergy and skin care at DSkinova dermatology clinic.",
    canonical: "https://www.dskinova.com/urticaria",
  },
  "/dermatitis": {
    title: "Dermatitis Treatment in Jaipur | DSkinova",
    description:
      "Customized dermatitis treatments in Jaipur to relieve itching, redness, and skin irritation at DSkinova.",
    canonical: "https://www.dskinova.com/dermatitis",
  },
  "/filler": {
    title: "Dermal Filler Treatment in Jaipur | DSkinova",
    description:
      "Hyaluronic acid dermal filler treatments in Jaipur for lips, cheeks, and facial contouring at DSkinova.",
    canonical: "https://www.dskinova.com/filler",
  },
};

// ── Step 1: Copy logo, write robots.txt & sitemap ────────────────────────────
try {
  mkdirSync(publicDir, { recursive: true });

  if (existsSync(srcLogo)) {
    copyFileSync(srcLogo, publicLogo);
    console.log("[prepare-seo] Copied logo to public/logo.png");
  } else {
    console.warn("[prepare-seo] Source logo not found:", srcLogo);
  }

  const siteUrl = process.env.VITE_SITE_URL || "https://www.dskinova.com";
  const robots = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl.replace(/\/$/, "")}/sitemap.xml\n`;
  writeFileSync(robotsFile, robots, "utf8");
  console.log("[prepare-seo] Wrote public/robots.txt");

  // Generate sitemap with all known pages
  const allPages = Object.keys(SEO_META);
  const urls = allPages
    .map(
      (p) =>
        `  <url>\n    <loc>${siteUrl.replace(/\/$/, "")}${p}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${p === "/" ? "1.0" : "0.8"}</priority>\n  </url>`
    )
    .join("\n");
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  writeFileSync(sitemapFile, sitemap, "utf8");
  console.log("[prepare-seo] Wrote public/sitemap.xml");

  // Save SEO meta as JSON for post-build injection
  const seoJsonFile = join(publicDir, "seo-meta.json");
  writeFileSync(seoJsonFile, JSON.stringify(SEO_META, null, 2), "utf8");
  console.log("[prepare-seo] Wrote public/seo-meta.json");
} catch (err) {
  console.error("[prepare-seo] Error:", err);
  process.exit(0); // don't fail the build if this step fails
}
