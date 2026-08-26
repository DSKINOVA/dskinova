/**
 * prepare-seo.mjs
 *
 * Runs BEFORE vite build (npm run prebuild).
 *
 * What it does:
 *  1. Copies logo.png to public/
 *  2. Writes robots.txt
 *  3. Dynamically fetches all services from the backend API (https://dskinova-server.vercel.app/api/services)
 *  4. Combines backend API services + static pages + menu aliases into a complete SEO meta map (public/seo-meta.json)
 *  5. Writes sitemap.xml containing all pages & services
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

const BASE_URL = "https://www.dskinova.com";

// Helper to clean "Meta Title: " prefix if present in admin inputs
function cleanTitle(title, fallback) {
  if (!title) return fallback;
  return title.replace(/^Meta Title:\s*/i, "").trim();
}

function cleanDesc(desc, fallback) {
  if (!desc) return fallback;
  return desc.trim();
}

// ── Static pages SEO meta ─────────────────────────────────────────────────────
const STATIC_META = {
  "/": {
    title: "Skin Specialist in Jaipur | Trusted Dermatologist for Healthy Skin",
    description:
      "Skin Doctor in Jaipur, Dskinova provides expert skincare, acne, and anti-aging treatments for glowing skin. Book your consultation today!",
    keywords: "skin specialist jaipur, dermatologist jaipur, skin doctor jaipur, skincare clinic jaipur, dskinova",
    canonical: `${BASE_URL}/`,
  },
  "/about": {
    title: "About Us | DSkinova — Skin Specialist in Jaipur",
    description:
      "Meet DSkinova's expert skin specialists and cosmetologists in Jaipur. Learn about our mission, advanced skincare treatments, and how we work.",
    keywords: "about dskinova, skin specialist jaipur, cosmetologist jaipur, skin clinic team",
    canonical: `${BASE_URL}/about`,
  },
  "/contact": {
    title: "Contact Us | DSkinova Skin Clinic Jaipur",
    description:
      "Contact DSkinova skin clinic in Jaipur. Book your appointment, get directions, or reach us by phone or email for expert skincare consultations.",
    keywords: "contact dskinova, skin clinic jaipur address, book appointment jaipur",
    canonical: `${BASE_URL}/contact`,
  },
  "/gallery": {
    title: "Gallery | DSkinova Skin Clinic Jaipur",
    description:
      "Explore DSkinova's gallery — real results, clinic moments, and before & after transformations from Jaipur's trusted skin specialist.",
    keywords: "dskinova gallery, before after skin treatment, clinic photos jaipur",
    canonical: `${BASE_URL}/gallery`,
  },
  "/wellness": {
    title: "Wellness Programs | DSkinova — Skin Health Jaipur",
    description:
      "Discover DSkinova's wellness programs designed for long-term skin health. Evidence-backed treatments, personalised care plans, and expert guidance in Jaipur.",
    keywords: "wellness programs jaipur, skin health, holistic skincare dskinova",
    canonical: `${BASE_URL}/wellness`,
  },
  "/news": {
    title: "News & Updates | DSkinova Skin Clinic Jaipur",
    description:
      "Stay updated with the latest skincare news, tips, and clinic updates from DSkinova — Jaipur's trusted skin specialist.",
    keywords: "skincare news, dskinova blog, skin care tips jaipur",
    canonical: `${BASE_URL}/news`,
  },
};

// ── Fallback static service meta (covers menu items & aliases) ────────────────
const STATIC_SERVICES = {
  "micro-needling-prp": {
    title: "Micro Needling with PRP in Jaipur | Dskinova Skin Clinic",
    description:
      "Get Micro Needling with PRP treatment in Jaipur at Dskinova. Stimulate collagen naturally, reduce acne scars, and achieve youthful glowing skin.",
  },
  "microneedling-treatment-jaipur": {
    title: "Micro Needling with PRP in Jaipur | Dskinova Skin Clinic",
    description:
      "Get Micro Needling with PRP treatment in Jaipur at Dskinova. Stimulate collagen naturally, reduce acne scars, and achieve youthful glowing skin.",
  },
  mnrf: {
    title: "MNRF Treatment in Jaipur | Micro Needling RF | Dskinova",
    description:
      "Advanced MNRF (Micro Needling Radio Frequency) treatment in Jaipur at Dskinova. Best for acne scars, skin tightening and collagen remodelling.",
  },
  "mnrf-treatment-jaipur": {
    title: "MNRF Treatment in Jaipur | Micro Needling RF | Dskinova",
    description:
      "Advanced MNRF (Micro Needling Radio Frequency) treatment in Jaipur at Dskinova. Best for acne scars, skin tightening and collagen remodelling.",
  },
  "chemical-peel": {
    title: "Chemical Peel Treatment in Jaipur | Skin Brightening | DSkinova",
    description:
      "Get expert Chemical Peel Treatment in Jaipur at DSkinova. Improve acne scars, pigmentation, tanning, and dull skin with dermatologist-led care.",
  },
  "chemical-peel-treatment-jaipur": {
    title: "Chemical Peel Treatment in Jaipur | Skin Brightening | DSkinova",
    description:
      "Get expert Chemical Peel Treatment in Jaipur at DSkinova. Improve acne scars, pigmentation, tanning, and dull skin with dermatologist-led care.",
  },
  "carbon-facial": {
    title: "Carbon Laser Facial in Jaipur | Dskinova Skin Clinic",
    description:
      "Get instant skin brightening and pore refinement with the Carbon Laser Peel at Dskinova Jaipur. Zero downtime!",
  },
  "carbon-facial-jaipur": {
    title: "Carbon Laser Facial in Jaipur | Dskinova Skin Clinic",
    description:
      "Get instant skin brightening and pore refinement with the Carbon Laser Peel at Dskinova Jaipur. Zero downtime!",
  },
  "vampire-facial": {
    title: "Vampire Facial in Jaipur | Dskinova Skin Clinic",
    description:
      "Platelet rich plasma microneedling for collagen boost and natural skin rejuvenation at Dskinova.",
  },
  "vampire-facial-jaipur": {
    title: "Vampire Facial in Jaipur | Dskinova Skin Clinic",
    description:
      "Platelet rich plasma microneedling for collagen boost and natural skin rejuvenation at Dskinova.",
  },
  "hair-prp": {
    title: "Hair PRP & GFC Therapy | Dskinova Skin Clinic Jaipur",
    description:
      "Concentrated platelet growth factors to revive hair follicles and treat hair fall in Jaipur at Dskinova.",
  },
  "hair-prp-therapy-jaipur": {
    title: "Hair PRP & GFC Therapy | Dskinova Skin Clinic Jaipur",
    description:
      "Concentrated platelet growth factors to revive hair follicles and treat hair fall in Jaipur at Dskinova.",
  },
  "laser-tattoo-removal": {
    title: "Laser Tattoo Removal Treatment in Jaipur | Dskinova",
    description:
      "Dskinova offers the best Laser Tattoo Removal Treatment in Jaipur with Q-Switched laser technology.",
  },
  "laser-tattoo-removal-jaipur": {
    title: "Laser Tattoo Removal Treatment in Jaipur | Dskinova",
    description:
      "Dskinova offers the best Laser Tattoo Removal Treatment in Jaipur with Q-Switched laser technology.",
  },
  "lazer-tattoo-removal-in-jaipur": {
    title: "Laser Tattoo Removal Treatment in Jaipur | Dskinova",
    description:
      "Dskinova offers the best Laser Tattoo Removal Treatment in Jaipur with Q-Switched laser technology.",
  },
  "pigmentation-solutions": {
    title: "Pigmentation Treatment Doctor in Jaipur | Dskinova Skin Clinic",
    description:
      "Expert treatment for melasma, dark spots, and pigmentation in Jaipur at Dskinova. Book your consultation today!",
  },
  "pigmentation-treatment-doctor-in-jaipur": {
    title: "Pigmentation Treatment Doctor in Jaipur | Dskinova Skin Clinic",
    description:
      "Expert treatment for melasma, dark spots, and pigmentation in Jaipur at Dskinova. Book your consultation today!",
  },
  "cosmologist-in-jaipur": {
    title: "Advanced Cosmetologist in Jaipur | Dskinova Skin Specialists",
    description:
      "Find the best Cosmetologist in Jaipur at Dskinova for expert skin & hair treatments. Book your appointment now!",
  },
  "cosmeologist-in-jaipur": {
    title: "Advanced Cosmetologist in Jaipur | Dskinova Skin Specialists",
    description:
      "Find the best Cosmetologist in Jaipur at Dskinova for expert skin & hair treatments. Book your appointment now!",
  },
  "skin-clinic-in-jaipur": {
    title: "Skin Clinic in Jaipur | Dskinova – Book Your Appointment Today",
    description:
      "Skin clinic in Jaipur – Dskinova offers expert skincare treatments and personalized care. Book your consultation today for healthy skin.",
  },
  "skin-doctor-in-jaipur": {
    title: "Skin Doctor in Jaipur | Expert Dermatologist for All Skin Issues",
    description:
      "Skin doctor in Jaipur offering advanced acne, pigmentation & laser treatments at Dskinova. Book your appointment now!",
  },
  "anti-aging": {
    title: "Anti-Aging Treatment in Jaipur | Dskinova Skin Specialists",
    description:
      "Dskinova offers the best Anti-Aging Treatment in Jaipur. Reduce wrinkles and fine lines with expert care.",
  },
  "anti-aging-in-jaipur": {
    title: "Anti-Aging Treatment in Jaipur | Dskinova Skin Specialists",
    description:
      "Dskinova offers the best Anti-Aging Treatment in Jaipur. Reduce wrinkles and fine lines with expert care.",
  },
  srf: {
    title: "SRF Treatment in Jaipur | DSkinova Skin Clinic",
    description:
      "SRF (Skin Radio Frequency) treatment in Jaipur for skin tightening and rejuvenation. Non-invasive procedure at DSkinova.",
  },
  "korean-facial": {
    title: "Korean Facial in Jaipur | DSkinova Skin Clinic",
    description:
      "Achieve luminous, dewy glass skin with deep active infusion at DSkinova Jaipur.",
  },
  "korean-skin-treatment": {
    title: "Korean Skin Treatment in Jaipur | DSkinova",
    description:
      "Korean skin treatment and glass skin facials in Jaipur. Experience K-beauty inspired skincare at DSkinova skin clinic.",
  },
  hydrafacial: {
    title: "HydraFacial Treatment in Jaipur | DSkinova",
    description:
      "3-in-1 deep cleansing, exfoliation, and vortex hydration at DSkinova Jaipur.",
  },
  "hydrafacial-jaipur": {
    title: "HydraFacial Treatment in Jaipur | DSkinova",
    description:
      "3-in-1 deep cleansing, exfoliation, and vortex hydration at DSkinova Jaipur.",
  },
  "oxygeneo-facial": {
    title: "Oxygeneo Facial in Jaipur | DSkinova",
    description:
      "Oxygeneo 3-in-1 super facial treatment in Jaipur for oxygenation, exfoliation, and nourishment.",
  },
  "photo-facial": {
    title: "Photo Facial in Jaipur | DSkinova",
    description:
      "IPL Photo Facial treatment in Jaipur for sun damage, redness, and collagen stimulation.",
  },
  "acne-scar": {
    title: "Acne Scar Treatment in Jaipur | DSkinova",
    description:
      "Target stubborn acne scars with laser, chemical peels, and microneedling at DSkinova.",
  },
  "laser-skin-therapy": {
    title: "Laser Skin Therapy in Jaipur | DSkinova",
    description:
      "Advanced laser skin therapy in Jaipur for skin rejuvenation, pigmentation, acne scars, and more.",
  },
  "laser-hair-removal": {
    title: "Laser Hair Removal in Jaipur | DSkinova",
    description:
      "Laser hair removal in Jaipur at Dskinova – safe, effective, long-lasting, and dermatologist-supervised.",
  },
  "laser-hair-removal-treatment-in-jaipur": {
    title: "Laser Hair Removal in Jaipur | DSkinova",
    description:
      "Laser hair removal in Jaipur at Dskinova – safe, effective, long-lasting, and dermatologist-supervised.",
  },
  "hair-regrowth-laser": {
    title: "Hair Regrowth Laser Treatment in Jaipur | DSkinova",
    description:
      "Red light photobiomodulation for dormant hair follicles at DSkinova.",
  },
  regrowth: {
    title: "Hair Regrowth Treatment in Jaipur | DSkinova",
    description:
      "Comprehensive hair regrowth solutions and scalp therapy at DSkinova Jaipur.",
  },
  scales: {
    title: "Scales & Skin Condition Treatment in Jaipur | DSkinova",
    description:
      "Homeopathic and dermatological treatment for skin scaling and irritation at DSkinova.",
  },
  dandruff: {
    title: "Dandruff Treatment in Jaipur | DSkinova",
    description: "Clear flaky scalp and seborrheic dermatitis at DSkinova.",
  },
  "intralesional-injection": {
    title: "Intralesional Injection in Jaipur | DSkinova",
    description:
      "Targeted steroid injection for Alopecia patch recovery and keloids at DSkinova.",
  },
  hairfall: {
    title: "Hair Fall Treatment in Jaipur | DSkinova",
    description:
      "Diagnose and control hair loss with medical therapy at DSkinova.",
  },
  "cryo-fat-freezing": {
    title: "Cryotherapy Fat Freezing in Jaipur | DSkinova",
    description:
      "Non-invasive fat reduction using targeted cooling technology at DSkinova.",
  },
  "skin-lightening-and-whitening": {
    title: "Skin Lightening & Whitening in Jaipur | DSkinova",
    description:
      "Glutathione and vitamin boost for radiant skin tone at DSkinova.",
  },
  "skin-tightening": {
    title: "Skin Tightening Treatment in Jaipur | DSkinova",
    description:
      "Stimulate collagen for firmer, lifted facial contours at DSkinova.",
  },
  "skin-allergy": {
    title: "Homeopathic Skin Allergy Treatment | DSkinova",
    description:
      "Root-cause natural homeopathic cure for persistent skin allergies in Jaipur.",
  },
  psoriasis: {
    title: "Homeopathic Psoriasis Treatment | DSkinova",
    description:
      "Natural relief for silver scales, itching, and skin inflammation in Jaipur.",
  },
  eczema: {
    title: "Homeopathic Eczema Treatment | DSkinova",
    description:
      "Soothe dry, itchy, inflamed eczema patches naturally at DSkinova.",
  },
  urticaria: {
    title: "Urticaria Treatment in Jaipur | DSkinova",
    description:
      "Effective treatment for chronic hives and skin allergies at DSkinova.",
  },
  fungal: {
    title: "Fungal Infection Treatment in Jaipur | DSkinova",
    description:
      "Fast relief from fungal skin and nail infections at DSkinova.",
  },
  scabies: {
    title: "Scabies Treatment in Jaipur | DSkinova",
    description:
      "Relieve intense itching and eliminate scabies infestation at DSkinova.",
  },
  "vitiligo-white-spot": {
    title: "Vitiligo & White Patch Treatment in Jaipur | DSkinova",
    description:
      "Advanced repigmentation therapy for vitiligo and white patches at DSkinova.",
  },
  "alopecia-areata": {
    title: "Alopecia Areata Treatment in Jaipur | DSkinova",
    description:
      "Specialized treatment to stimulate hair regrowth in patchy alopecia.",
  },
  "stretch-marks": {
    title: "Stretch Marks Treatment in Jaipur | DSkinova",
    description:
      "Reduce visibility of stretch marks with advanced laser and microneedling.",
  },
  "pre-bridal-specials": {
    title: "Pre-Bridal Skincare Packages in Jaipur | DSkinova",
    description:
      "Customised pre-bridal facial and body glowing packages at DSkinova.",
  },
  "medical-spa-facials": {
    title: "Medical Spa Facials in Jaipur | DSkinova",
    description:
      "Rejuvenating medical grade spa facials tailored for all skin types.",
  },
  mesotherapy: {
    title: "Mesotherapy Treatment in Jaipur | DSkinova",
    description:
      "Nutrient and vitamin infusion for skin hydration and scalp health.",
  },
  microdermabrasion: {
    title: "Microdermabrasion in Jaipur | DSkinova",
    description:
      "Exfoliate dead skin cells for smoother texture and radiant complexion.",
  },
  "deep-peelings": {
    title: "Deep Peelings Treatment in Jaipur | DSkinova",
    description:
      "Intense skin resurfacing for deep pigmentation and stubborn marks.",
  },
  facials: {
    title: "Customised Facial Treatments in Jaipur | DSkinova",
    description: "Deep cleansing and hydrating facials by certified aestheticians.",
  },
  "botox-treatment": {
    title: "Botox Treatment in Jaipur | DSkinova",
    description:
      "Smoothen forehead lines, crow's feet, and wrinkles with expert Botox.",
  },
};

async function main() {
  try {
    mkdirSync(publicDir, { recursive: true });

    if (existsSync(srcLogo)) {
      copyFileSync(srcLogo, publicLogo);
      console.log("[prepare-seo] Copied logo to public/logo.png");
    }

    const robots = `User-agent: *\nAllow: /\n\nSitemap: ${BASE_URL}/sitemap.xml\n`;
    writeFileSync(robotsFile, robots, "utf8");
    console.log("[prepare-seo] Wrote public/robots.txt");

    // Initialize SEO meta with static pages
    const SEO_META = { ...STATIC_META };

    // Add static fallbacks
    for (const [slug, data] of Object.entries(STATIC_SERVICES)) {
      const routeKey = `/${slug.replace(/^\//, "")}`;
      SEO_META[routeKey] = {
        title: cleanTitle(data.title, "Skin Specialist in Jaipur | DSkinova"),
        description: cleanDesc(
          data.description,
          "Expert skincare and cosmetology treatments in Jaipur at DSkinova."
        ),
        keywords: data.keywords || "",
        canonical: `${BASE_URL}${routeKey}`,
      };
    }

    // ── Dynamically fetch ALL services from backend API ───────────────────────
    try {
      console.log("[prepare-seo] Fetching services from backend API...");
      const apiRes = await fetch(
        "https://dskinova-server.vercel.app/api/services",
        { signal: AbortSignal.timeout(5000) }
      );

      if (apiRes.ok) {
        const data = await apiRes.json();
        if (data?.success && Array.isArray(data?.items)) {
          console.log(
            `[prepare-seo] Received ${data.items.length} services from backend API!`
          );

          for (const item of data.items) {
            const rawTitle =
              item.seo?.meta_title || item.title || "DSkinova Skin Clinic";
            const title = cleanTitle(
              rawTitle,
              "Skin Specialist in Jaipur | DSkinova"
            );

            const rawDesc =
              item.seo?.meta_description ||
              item.short ||
              (typeof item.overview === "object"
                ? item.overview?.description
                : item.overview) ||
              "";
            const description = cleanDesc(
              rawDesc,
              "Expert skincare & cosmetology clinic in Jaipur. Book your appointment at DSkinova today!"
            );

            const keywords = (item.seo?.focus_keyphrase || "").trim();

            // Add main slug
            if (item.slug) {
              const routeKey = `/${item.slug.replace(/^\//, "")}`;
              SEO_META[routeKey] = {
                title,
                description,
                keywords,
                canonical: `${BASE_URL}${routeKey}`,
              };
            }

            // Add id if different
            if (item.id && item.id !== item.slug) {
              const idRouteKey = `/${item.id.replace(/^\//, "")}`;
              SEO_META[idRouteKey] = {
                title,
                description,
                keywords,
                canonical: `${BASE_URL}${idRouteKey}`,
              };
            }

            // Create clean alias routes (e.g. if slug is microneedling-treatment-jaipur, also map micro-needling-prp)
            if (item.slug?.includes("microneedling")) {
              SEO_META["/micro-needling-prp"] = { title, description, canonical: `${BASE_URL}/micro-needling-prp` };
            }
            if (item.slug?.includes("mnrf")) {
              SEO_META["/mnrf"] = { title, description, canonical: `${BASE_URL}/mnrf` };
            }
            if (item.slug?.includes("chemical-peel")) {
              SEO_META["/chemical-peel"] = { title, description, canonical: `${BASE_URL}/chemical-peel` };
            }
            if (item.slug?.includes("carbon-facial")) {
              SEO_META["/carbon-facial"] = { title, description, canonical: `${BASE_URL}/carbon-facial` };
            }
            if (item.slug?.includes("vampire-facial")) {
              SEO_META["/vampire-facial"] = { title, description, canonical: `${BASE_URL}/vampire-facial` };
            }
            if (item.slug?.includes("hair-prp")) {
              SEO_META["/hair-prp"] = { title, description, canonical: `${BASE_URL}/hair-prp` };
            }
            if (item.slug?.includes("tattoo")) {
              SEO_META["/laser-tattoo-removal"] = { title, description, canonical: `${BASE_URL}/laser-tattoo-removal` };
            }
          }
        }
      }
    } catch (err) {
      console.warn(
        "[prepare-seo] Failed to fetch backend API, using static fallbacks:",
        err.message
      );
    }

    // Write public/seo-meta.json
    const seoJsonFile = join(publicDir, "seo-meta.json");
    writeFileSync(seoJsonFile, JSON.stringify(SEO_META, null, 2), "utf8");
    console.log(
      `[prepare-seo] Wrote public/seo-meta.json with ${
        Object.keys(SEO_META).length
      } routes!`
    );

    // Generate sitemap.xml
    const allPages = Object.keys(SEO_META);
    const urls = allPages
      .map(
        (p) =>
          `  <url>\n    <loc>${BASE_URL}${p}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${
            p === "/" ? "1.0" : "0.8"
          }</priority>\n  </url>`
      )
      .join("\n");
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
    writeFileSync(sitemapFile, sitemap, "utf8");
    console.log("[prepare-seo] Wrote public/sitemap.xml");
  } catch (err) {
    console.error("[prepare-seo] Fatal Error:", err);
    process.exit(0);
  }
}

main();
