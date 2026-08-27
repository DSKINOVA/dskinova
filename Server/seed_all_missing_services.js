import mongoose from "mongoose";
import dotenv from "dotenv";
import Service from "./models/Service.js";

dotenv.config();

const MONGO_URI =
  process.env.MONGODB_URI ||
  process.env.MONGO_URI ||
  "mongodb+srv://dskinova:dskinova123@cluster0.zb3abyw.mongodb.net/dskinova?retryWrites=true&w=majority&appName=Cluster0";

const missingServices = [
  {
    slug: "pre-bridal-specials",
    previousSlugs: ["pre-bridal", "bridal-specials"],
    title: "Pre-Bridal Specials",
    short: "Curated skincare and haircare packages to prep for your big day with maximum glow and hydration.",
    price: 12000,
    currency: "₹",
    priceNote: "package",
    category: "Skin",
    subcategory: "Bridal",
    image: "/Images/Services/PreBridalSpecials.jpg",
    overview: {
      title: "Pre-Bridal Specials – Radiance for Your Big Day",
      description: `
        <p>Your wedding day deserves nothing less than perfection. Our Pre-Bridal Specials are dermatologist-curated skincare and haircare packages designed to give you flawless, hydrated, and radiant skin for all your wedding functions.</p>
        <h3>Package Highlights</h3>
        <p>Includes deep medical spa facials, gentle brightening peels, full-body polishing, and customized homecare regimens tailored to your skin type and timeline.</p>
        <h3>Customized Timeline</h3>
        <p>Whether you have 1 month or 3 months before your wedding, our experts customize the treatment frequency to ensure peak radiance without any downtime or irritation.</p>
      `
    },
    included: [
      "Consultation & Skin Analysis",
      "Medical Spa Facial",
      "Body Polishing",
      "Customized Home-care Plan"
    ],
    excluded: [
      "Injectables (Botox/Fillers)",
      "Surgical procedures",
      "Hair extensions"
    ],
    additionalInfo: {
      duration: "120 min per session",
      sessions: "3-5 sessions recommended",
      results: "Peak glow on your wedding day"
    },
    seo: {
      meta_title: "Pre-Bridal Specials | DSkinova",
      meta_description: "Pre-Bridal skincare packages in Jaipur at DSkinova. Get glowing, radiant skin for your wedding day.",
      focus_keyphrase: "pre bridal skin package jaipur",
      slug: "pre-bridal-specials"
    }
  },
  {
    slug: "stretch-marks",
    previousSlugs: ["stretch-mark-treatment"],
    title: "Stretch Marks Treatment",
    short: "Targeted treatments including microneedling, MNRF, and lasers to improve stretch mark texture and tone.",
    price: 3000,
    currency: "₹",
    priceNote: "per session",
    category: "Skin",
    subcategory: "Body Care",
    image: "/Images/Services/StretchMarks.jpg",
    overview: {
      title: "Stretch Marks Treatment in Jaipur",
      description: `
        <p>Stretch marks occur when the skin stretches rapidly due to weight changes, pregnancy, or growth spurts, breaking collagen and elastin fibers. At DSkinova, we offer advanced clinical treatments to diminish their depth and color.</p>
        <h3>Treatment Modalities</h3>
        <p>We combine MNRF (Micro Needling Radiofrequency), CO2 laser resurfacing, and bio-stimulatory serums to elevate depressed stretch mark bands and stimulate fresh collagen remodeling.</p>
      `
    },
    included: [
      "Dermatologist Assessment",
      "Treatment Session (MNRF / Laser)",
      "Topical Bio-Actives",
      "Aftercare Guidance"
    ],
    excluded: [
      "Surgical tummy tuck",
      "Permanent tattoo camouflage"
    ],
    additionalInfo: {
      duration: "45-60 min",
      sessions: "4-6 sessions recommended",
      results: "Visible improvement in 6-8 weeks"
    },
    seo: {
      meta_title: "Stretch Marks Treatment in Jaipur | DSkinova",
      meta_description: "Effective stretch marks removal treatment in Jaipur at DSkinova. Microneedling & laser for smooth skin.",
      focus_keyphrase: "stretch marks treatment jaipur",
      slug: "stretch-marks"
    }
  },
  {
    slug: "photo-facial",
    previousSlugs: ["ipl-photo-facial"],
    title: "Photo Facial Treatment",
    short: "IPL and light therapy to target pigmentation, redness, and sun damage for glowing, clear skin.",
    price: 3000,
    currency: "₹",
    priceNote: "per session",
    category: "Skin",
    subcategory: "Facials",
    image: "/Images/Services/photo-facial.jpg",
    overview: {
      title: "Photo Facial – Light-Based Skin Rejuvenation",
      description: `
        <p>Photo Facial uses intense pulsed light (IPL) technology to penetrate deep into the skin, targeting melanin clusters and red hemoglobin without damaging the skin surface. It effectively erases sun spots, freckles, rosacea redness, and fine lines.</p>
      `
    },
    included: [
      "Deep Cleansing",
      "IPL Light Therapy Session",
      "Cooling Gel Application",
      "Soothing Sunscreen"
    ],
    excluded: [
      "Chemical Peels",
      "Injectables"
    ],
    additionalInfo: {
      duration: "45 min",
      sessions: "3-4 sessions recommended",
      results: "Clearer tone in 1-2 weeks"
    },
    seo: {
      meta_title: "Photo Facial in Jaipur | DSkinova",
      meta_description: "Get IPL Photo Facial treatment in Jaipur at DSkinova for bright, rejuvenated skin.",
      focus_keyphrase: "photo facial jaipur",
      slug: "photo-facial"
    }
  },
  {
    slug: "oxygeneo-facial",
    previousSlugs: ["oxygeneo"],
    title: "Oxygeneo Facial",
    short: "3-in-1 super facial combining exfoliation, oxygenation, and nutrient infusion for instant skin glow.",
    price: 3500,
    currency: "₹",
    priceNote: "per session",
    category: "Skin",
    subcategory: "Facials",
    image: "/Images/Services/oxygeneo-facial.png",
    overview: {
      title: "Oxygeneo 3-in-1 Super Facial",
      description: `
        <p>Oxygeneo is a revolutionary technology that provides 3 essential skin renewal treatments simultaneously: gentle exfoliation, natural skin oxygenation from within (the Bohr effect), and deep active serum infusion.</p>
      `
    },
    included: [
      "Oxygeneo Pod Exfoliation",
      "CO2 Bubble Oxygenation",
      "Serum Ultrasound Infusion",
      "Hydrating Mask"
    ],
    excluded: [
      "Chemical Peels",
      "Microneedling"
    ],
    additionalInfo: {
      duration: "60 min",
      sessions: "Single session for events or monthly care",
      results: "Instant glass-skin glow"
    },
    seo: {
      meta_title: "Oxygeneo Facial in Jaipur | DSkinova",
      meta_description: "Experience Oxygeneo 3-in-1 Super Facial in Jaipur at DSkinova for deep hydration and instant glow.",
      focus_keyphrase: "oxygeneo facial jaipur",
      slug: "oxygeneo-facial"
    }
  },
  {
    slug: "medical-spa-facials",
    previousSlugs: ["medical-facials"],
    title: "Medical Spa Facials",
    short: "Dermatologist-formulated facial protocols tailored to clear acne, hydrate deeply, and boost skin radiance.",
    price: 2500,
    currency: "₹",
    priceNote: "per session",
    category: "Skin",
    subcategory: "Facials",
    image: "/Images/Services/MedicalSpaFacials.webp",
    overview: {
      title: "Medical Spa Facials – Clinical Skincare Rejuvenation",
      description: `
        <p>Unlike regular salon facials, our Medical Spa Facials are formulated by dermatologists using medical-grade active ingredients, ultrasonic deep cleansing, and therapeutic LED light therapy.</p>
      `
    },
    included: [
      "Skin Diagnosis",
      "Ultrasonic Cleansing",
      "Active Serum Infusion",
      "Therapeutic Mask"
    ],
    excluded: [
      "Laser Surfacing",
      "Botox & Fillers"
    ],
    additionalInfo: {
      duration: "60 min",
      sessions: "Monthly maintenance",
      results: "Healthy, refreshed skin tone"
    },
    seo: {
      meta_title: "Medical Spa Facials in Jaipur | DSkinova",
      meta_description: "Dermatologist-guided Medical Spa Facials in Jaipur at DSkinova for healthy, glowing skin.",
      focus_keyphrase: "medical spa facials jaipur",
      slug: "medical-spa-facials"
    }
  },
  {
    slug: "microdermabrasion",
    previousSlugs: ["diamond-microdermabrasion"],
    title: "Microdermabrasion Treatment",
    short: "Diamond-tip microdermabrasion to gently buff away dead skin cells and reveal smooth, clear skin.",
    price: 2000,
    currency: "₹",
    priceNote: "per session",
    category: "Skin",
    subcategory: "Exfoliation",
    image: "/Images/Services/microdermabrasion.jpg",
    overview: {
      title: "Diamond Microdermabrasion Skin Exfoliation",
      description: `
        <p>Microdermabrasion is a non-invasive cosmetic procedure that uses a diamond-tipped wand to gently exfoliate the outermost layer of dead skin cells, helping clear clogged pores, blackheads, and superficial roughness.</p>
      `
    },
    included: [
      "Pre-cleansing",
      "Diamond-tip Microdermabrasion",
      "Soothing Hydration",
      "Sun Defense"
    ],
    excluded: [
      "Deep Chemical Peels",
      "Microneedling"
    ],
    additionalInfo: {
      duration: "45 min",
      sessions: "3-6 sessions recommended",
      results: "Immediate skin softness"
    },
    seo: {
      meta_title: "Microdermabrasion Treatment in Jaipur | DSkinova",
      meta_description: "Professional Microdermabrasion treatment in Jaipur at DSkinova for smooth, exfoliated skin.",
      focus_keyphrase: "microdermabrasion treatment jaipur",
      slug: "microdermabrasion"
    }
  },
  {
    slug: "mesotherapy",
    previousSlugs: ["meso-facial"],
    title: "Mesotherapy Treatment",
    short: "Micro-injections of vitamins, enzymes, and hyaluronic acid to rejuvenate, nourish, and tighten skin.",
    price: 3500,
    currency: "₹",
    priceNote: "per session",
    category: "Skin",
    subcategory: "Rejuvenation",
    image: "/Images/Services/mesotherapy.jpg",
    overview: {
      title: "Mesotherapy for Skin Rejuvenation & Hydration",
      description: `
        <p>Mesotherapy involves micro-infusions of customized vitamin cocktails, antioxidants, and non-crosslinked hyaluronic acid directly into the middle layer of skin (mesoderm) to boost cellular repair and radiance.</p>
      `
    },
    included: [
      "Topical Anesthesia",
      "Customized Meso Cocktail",
      "Micro-injection Session",
      "Post-care Gel"
    ],
    excluded: [
      "Plastic Surgery",
      "Permanent Fillers"
    ],
    additionalInfo: {
      duration: "45-60 min",
      sessions: "3-4 sessions recommended",
      results: "Deep hydration in 1-2 weeks"
    },
    seo: {
      meta_title: "Mesotherapy Treatment in Jaipur | DSkinova",
      meta_description: "Revitalize your skin with Mesotherapy in Jaipur at DSkinova. Deep hydration & vitamin infusion.",
      focus_keyphrase: "mesotherapy treatment jaipur",
      slug: "mesotherapy"
    }
  },
  {
    slug: "srf",
    previousSlugs: ["sub-ablative-rf"],
    title: "SRF – Sub-Ablative Radiofrequency",
    short: "Sub-ablative radiofrequency for non-invasive skin firming, collagen stimulation, and fine line reduction.",
    price: 4500,
    currency: "₹",
    priceNote: "per session",
    category: "Skin",
    subcategory: "Skin Tightening",
    image: "/Images/newServicesComponent/Laser-skin-therapy.jpg",
    overview: {
      title: "SRF Sub-Ablative Radiofrequency Therapy",
      description: `
        <p>SRF delivers controlled fractional radiofrequency energy into the dermal matrix, creating focused thermal coagulation zones that induce powerful collagen tightening and skin lifting.</p>
      `
    },
    included: [
      "Skin Mapping",
      "Sub-Ablative RF Session",
      "Cooling Therapy",
      "Aftercare"
    ],
    excluded: [
      "Surgical Face Lift",
      "Invasive Surgery"
    ],
    additionalInfo: {
      duration: "45 min",
      sessions: "3-4 sessions recommended",
      results: "Fulfilling firmness over 2-3 months"
    },
    seo: {
      meta_title: "SRF Treatment in Jaipur | Sub-Ablative RF | DSkinova",
      meta_description: "SRF Sub-Ablative Radiofrequency treatment in Jaipur at DSkinova for skin firming & tightening.",
      focus_keyphrase: "SRF treatment jaipur",
      slug: "srf"
    }
  },
  {
    slug: "co2-fractional-laser",
    previousSlugs: ["co2-laser"],
    title: "CO2 Fractional Laser Treatment",
    short: "Gold standard ablative laser resurfacing for deep acne scars, surgical scars, and skin texture remodeling.",
    price: 5000,
    currency: "₹",
    priceNote: "per session",
    category: "Skin",
    subcategory: "Acne Scar",
    image: "/Images/Services/co2-fractional-laser.jpg",
    overview: {
      title: "CO2 Fractional Laser for Deep Acne Scars",
      description: `
        <p>Fractional CO2 laser resurfacing creates microscopic thermal columns to remove damaged skin layers and induce intense collagen remodeling, dramatic for deep boxcar and icepick scars.</p>
      `
    },
    included: [
      "Topical Anesthesia",
      "CO2 Laser Session",
      "Cooling & Soothing Gel",
      "Post-care Recovery Plan"
    ],
    excluded: [
      "Home care products"
    ],
    additionalInfo: {
      duration: "60 min",
      sessions: "3-5 sessions recommended",
      results: "Significant scar reduction"
    },
    seo: {
      meta_title: "CO2 Fractional Laser in Jaipur | DSkinova",
      meta_description: "CO2 Fractional Laser resurfacing in Jaipur at DSkinova. Best treatment for deep acne scars.",
      focus_keyphrase: "co2 fractional laser jaipur",
      slug: "co2-fractional-laser"
    }
  },
  {
    slug: "dermaroller-with-prp-and-subcision",
    previousSlugs: ["dermaroller-prp-subcision"],
    title: "Dermaroller with PRP & Subcision",
    short: "Triple therapy combining subcision, dermaroller microneedling, and PRP growth factors for tethered scars.",
    price: 4000,
    currency: "₹",
    priceNote: "per session",
    category: "Skin",
    subcategory: "Acne Scar",
    image: "/Images/Services/dermaroller-with-prp&subcision.jpg",
    overview: {
      title: "Subcision + Dermaroller + PRP Combination Therapy",
      description: `
        <p>Subcision releases fibrotic scar bands beneath boxcar and rolling scars, followed by dermaroller microneedling and PRP infusion for maximal skin elevation and healing.</p>
      `
    },
    included: [
      "Scar Subcision",
      "Dermaroller Session",
      "PRP Infusion",
      "Antiseptic Dressing"
    ],
    excluded: [
      "Surgical revision"
    ],
    additionalInfo: {
      duration: "75 min",
      sessions: "3-4 sessions recommended",
      results: "Scar elevation in 4-6 weeks"
    },
    seo: {
      meta_title: "Dermaroller PRP & Subcision in Jaipur | DSkinova",
      meta_description: "Combination subcision, dermaroller & PRP therapy in Jaipur at DSkinova for tethered acne scars.",
      focus_keyphrase: "subcision dermaroller prp jaipur",
      slug: "dermaroller-with-prp-and-subcision"
    }
  },
  {
    slug: "erbium-fiber-laser",
    previousSlugs: ["erbium-laser"],
    title: "Erbium Fiber Laser Treatment",
    short: "Non-ablative fractional laser for scar smoothing and skin rejuvenation with minimal downtime.",
    price: 4500,
    currency: "₹",
    priceNote: "per session",
    category: "Skin",
    subcategory: "Acne Scar",
    image: "/Images/Services/erbium-fiber-laser.jpg",
    overview: {
      title: "Erbium Fiber Laser Resurfacing",
      description: `
        <p>Gentle non-ablative fractional laser therapy that targets epidermal and dermal texture without peeling, ensuring fast recovery and smooth results.</p>
      `
    },
    included: [
      "Topical Numbing",
      "Erbium Fiber Session",
      "Cooling Recovery",
      "Sunscreen"
    ],
    excluded: [
      "Surgery"
    ],
    additionalInfo: {
      duration: "45 min",
      sessions: "3-4 sessions recommended",
      results: "Smoother skin texture"
    },
    seo: {
      meta_title: "Erbium Fiber Laser in Jaipur | DSkinova",
      meta_description: "Erbium Fiber Laser treatment in Jaipur at DSkinova for gentle scar reduction and skin resurfacing.",
      focus_keyphrase: "erbium fiber laser jaipur",
      slug: "erbium-fiber-laser"
    }
  },
  {
    slug: "botox-treatment",
    previousSlugs: ["botox"],
    title: "Botox Treatment",
    short: "FDA-approved anti-wrinkle injections to relax crow's feet, forehead lines, and frown lines.",
    price: 6000,
    currency: "₹",
    priceNote: "per area",
    category: "Skin",
    subcategory: "Anti Aging",
    image: "/Images/newServicesComponent/BotoxTreatment.avif",
    overview: {
      title: "Botox Anti-Wrinkle Treatment in Jaipur",
      description: `
        <p>Safe, FDA-approved botulinum toxin injections administered by expert dermatologists to relax hyperactive facial muscles and smooth dynamic wrinkles.</p>
      `
    },
    included: [
      "Dermatologist Consultation",
      "Facial Muscle Mapping",
      "Botox Injection",
      "14-day Follow-up Touch-up"
    ],
    excluded: [
      "Permanent Dermal Fillers"
    ],
    additionalInfo: {
      duration: "30 min",
      sessions: "Repeat every 4-6 months",
      results: "Visible smoothing in 5-7 days"
    },
    seo: {
      meta_title: "Botox Treatment in Jaipur | DSkinova",
      meta_description: "Safe & professional Botox treatment in Jaipur at DSkinova. Smooth wrinkles & fine lines effectively.",
      focus_keyphrase: "botox treatment jaipur",
      slug: "botox-treatment"
    }
  },
  {
    slug: "facials",
    previousSlugs: ["medical-facials-list"],
    title: "Medical Facials",
    short: "Customized medical facials designed to hydrate, brighten, and cleanse skin.",
    price: 2000,
    currency: "₹",
    priceNote: "per session",
    category: "Skin",
    subcategory: "Facials",
    image: "/Images/newServicesComponent/Facials.jpg",
    overview: {
      title: "Customized Medical Facials",
      description: `
        <p>Medical-grade facial treatments customized to your skin type to clean pores, exfoliate dead cells, and infuse essential hydration.</p>
      `
    },
    included: [
      "Deep Cleansing",
      "Steam & Extraction",
      "Hydrating Mask",
      "SPF Protection"
    ],
    excluded: [
      "Injectables"
    ],
    additionalInfo: {
      duration: "60 min",
      sessions: "Monthly care",
      results: "Clean & glowing skin"
    },
    seo: {
      meta_title: "Medical Facials in Jaipur | DSkinova",
      meta_description: "Customized medical facials in Jaipur at DSkinova for healthy glowing skin.",
      focus_keyphrase: "medical facials jaipur",
      slug: "facials"
    }
  },
  {
    slug: "hair-transplant",
    previousSlugs: ["hair-transplant-jaipur"],
    title: "Hair Transplant",
    short: "Advanced FUE/FUT hair transplant techniques for natural hairline restoration and hair density.",
    price: 40000,
    currency: "₹",
    priceNote: "starting",
    category: "Hair",
    subcategory: "Hair Restoration",
    image: "/Images/Services/HairTransplant.webp",
    overview: {
      title: "FUE & FUT Hair Transplant in Jaipur",
      description: `
        <p>Permanent, natural hair restoration performed by certified hair transplant surgeons using micro-graft extraction and precision implantation.</p>
      `
    },
    included: [
      "Graft Planning & Design",
      "FUE/FUT Procedure",
      "Local Anesthesia",
      "Post-op Care Kit & Wash"
    ],
    excluded: [
      "Unrelated Scalp Surgeries"
    ],
    additionalInfo: {
      duration: "Full day procedure",
      sessions: "Single procedure",
      results: "Permanent hair growth in 6-12 months"
    },
    seo: {
      meta_title: "Hair Transplant in Jaipur | DSkinova Hair Clinic",
      meta_description: "Advanced FUE/FUT Hair Transplant in Jaipur at DSkinova. Natural hairline & high graft survival.",
      focus_keyphrase: "hair transplant in jaipur",
      slug: "hair-transplant"
    }
  },
  {
    slug: "urticaria",
    previousSlugs: ["hives"],
    title: "Homeopathic Urticaria Care",
    short: "Root-cause natural homeopathic treatment for chronic hives, itching, and skin welts.",
    price: 800,
    currency: "₹",
    priceNote: "consultation",
    category: "Homeopathy",
    subcategory: "Allergies",
    image: "/Images/hemopathic-img/urticaria.jpg",
    overview: {
      title: "Natural Homeopathic Relief for Urticaria & Hives",
      description: `
        <p>Constitutional homeopathic treatment aimed at calming immune hyper-reactivity, reducing histamine response, and eliminating recurrent hives naturally.</p>
      `
    },
    included: [
      "Detailed Case Taking",
      "Constitutional Remedy Prescriptions",
      "Dietary Guidance"
    ],
    excluded: [
      "Emergency Steroid Injections"
    ],
    additionalInfo: {
      duration: "30 min consultation",
      sessions: "Regular constitutional follow-up",
      results: "Symptom reduction in 2-4 weeks"
    },
    seo: {
      meta_title: "Homeopathic Urticaria Treatment | DSkinova",
      meta_description: "Natural homeopathic cure for chronic hives & urticaria in Jaipur at DSkinova.",
      focus_keyphrase: "urticaria homeopathic treatment jaipur",
      slug: "urticaria"
    }
  },
  {
    slug: "fungal",
    previousSlugs: ["ringworm"],
    title: "Homeopathic Fungal Infection Care",
    short: "Safe, natural homeopathic remedies for ringworm, tinea, and recurrent fungal infections.",
    price: 800,
    currency: "₹",
    priceNote: "consultation",
    category: "Homeopathy",
    subcategory: "Infections",
    image: "/Images/hemopathic-img/fungal.jpg",
    overview: {
      title: "Homeopathic Treatment for Recurrent Fungal Infections",
      description: `
        <p>Internal homeopathic medicines that enhance body immunity, eliminate fungal overgrowth from the root, and prevent frequent recurrences without side effects.</p>
      `
    },
    included: [
      "Detailed Consultation",
      "Individualized Remedy",
      "Hygiene & Care Instructions"
    ],
    excluded: [
      "Allopathic Steroid Creams"
    ],
    additionalInfo: {
      duration: "30 min consultation",
      sessions: "As advised",
      results: "Root-cause healing"
    },
    seo: {
      meta_title: "Homeopathic Fungal Infection Treatment | DSkinova",
      meta_description: "Effective homeopathic treatment for ringworm & fungal skin infections in Jaipur at DSkinova.",
      focus_keyphrase: "fungal infection homeopathic jaipur",
      slug: "fungal"
    }
  },
  {
    slug: "scabies",
    previousSlugs: ["scabies-care"],
    title: "Homeopathic Scabies Treatment",
    short: "Gentle homeopathic management for skin mites, intense itching, and rash relief.",
    price: 800,
    currency: "₹",
    priceNote: "consultation",
    category: "Homeopathy",
    subcategory: "Infections",
    image: "/Images/hemopathic-img/scabies.jpg",
    overview: {
      title: "Homeopathic Scabies & Itch Management",
      description: `
        <p>Soothes severe nighttime itching and accelerates skin healing without harsh chemical lotions or skin irritation.</p>
      `
    },
    included: [
      "Case Evaluation",
      "Homeopathic Remedy",
      "Disinfection Guidance"
    ],
    excluded: [
      "Chemical pesticides"
    ],
    additionalInfo: {
      duration: "30 min consultation",
      sessions: "Follow-up until clear",
      results: "Itch relief"
    },
    seo: {
      meta_title: "Homeopathic Scabies Treatment | DSkinova",
      meta_description: "Natural homeopathic relief for scabies & persistent skin itching in Jaipur at DSkinova.",
      focus_keyphrase: "scabies treatment jaipur",
      slug: "scabies"
    }
  },
  {
    slug: "vitiligo-white-spot",
    previousSlugs: ["vitiligo"],
    title: "Homeopathic Vitiligo Care",
    short: "Natural homeopathic stimulation for melanocytes to restore natural skin pigment in vitiligo.",
    price: 1000,
    currency: "₹",
    priceNote: "consultation",
    category: "Homeopathy",
    subcategory: "Pigmentation",
    image: "/Images/hemopathic-img/vitiligo-white-spot.jpg",
    overview: {
      title: "Homeopathic Vitiligo & White Spot Management",
      description: `
        <p>Focuses on halting white patch spread and stimulating repigmentation by balancing the immune system and active skin melanocytes.</p>
      `
    },
    included: [
      "Wood Lamp Assessment",
      "Constitutional Medicine",
      "Dietary Plan"
    ],
    excluded: [
      "Skin Grafting Surgery"
    ],
    additionalInfo: {
      duration: "30-45 min consultation",
      sessions: "Long-term constitutional management",
      results: "Halt patch spread & repigmentation"
    },
    seo: {
      meta_title: "Homeopathic Vitiligo Treatment | DSkinova",
      meta_description: "Natural repigmentation homeopathic treatment for vitiligo & white spots in Jaipur at DSkinova.",
      focus_keyphrase: "vitiligo homeopathic treatment jaipur",
      slug: "vitiligo-white-spot"
    }
  },
  {
    slug: "alopecia-areata",
    previousSlugs: ["patchy-hair-loss"],
    title: "Homeopathic Alopecia Areata Care",
    short: "Internal homeopathic therapy for patchy hair loss and autoimmune alopecia control.",
    price: 1000,
    currency: "₹",
    priceNote: "consultation",
    category: "Homeopathy",
    subcategory: "Hair Loss",
    image: "/Images/hemopathic-img/alopecia-areata.jpg",
    overview: {
      title: "Homeopathic Treatment for Alopecia Areata Patchy Hair Loss",
      description: `
        <p>Rebalances immune response to stop patch expansion and stimulate hair follicle regrowth in bald spots naturally without painful steroid injections.</p>
      `
    },
    included: [
      "Scalp Case Study",
      "Constitutional Homeopathic Remedy",
      "Regrowth Monitoring"
    ],
    excluded: [
      "Steroid Injections",
      "Hair Transplants"
    ],
    additionalInfo: {
      duration: "30 min consultation",
      sessions: "Regular monitoring",
      results: "Patch regrowth stimulation"
    },
    seo: {
      meta_title: "Homeopathic Alopecia Areata Treatment | DSkinova",
      meta_description: "Natural homeopathic treatment for alopecia areata bald patches in Jaipur at DSkinova.",
      focus_keyphrase: "alopecia areata homeopathic jaipur",
      slug: "alopecia-areata"
    }
  }
];

async function seedMissing() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB for seeding missing services...");

    for (const item of missingServices) {
      const existing = await Service.findOne({
        $or: [{ slug: item.slug }, { previousSlugs: item.slug }]
      });

      if (!existing) {
        await Service.create(item);
        console.log(`[SEEDED] ${item.title} (${item.slug})`);
      } else {
        console.log(`[EXISTS] ${item.title} (${item.slug})`);
      }
    }

    console.log("Seeding finished successfully!");
    process.exit(0);
  } catch (err) {
    console.error("Seeding error:", err);
    process.exit(1);
  }
}

seedMissing();
