// Expanded services mock data
// Service-specific images
import imgPigmentation from "../../public/Images/Service-Images-new/pigmentation.jpg";
//jhjk
import imgSkinTightening from "../../public/Images/Service-Images-new/skin-tightening.jpg";
import imgHairPRP from "../../public/Images/Service-Images-new/hair-prp.jpg";
import imgHairGFC from "../../public/Images/newServicesComponent/HAIR-GFC.webp";
import imgHairRegrowthLaser from "../../public/Images/Service-Images-new/hair-regrowth-laser.jpg";
import imgKoreanSkin from "../../public/Images/Service-Images-new/Korean-Skin-Treatment.jpg";
import imgBotox from "../../public/Images/newServicesComponent/BotoxTreatment.avif";
import imgAntiAging from "../../public/Images/Service-Images-new/Anti-aging.jpg";
import imgDeepPeelings from "../../public/Images/Service-Images-new/Deep-Peelings.jpg";
import imgFacials from "../../public/Images/newServicesComponent/Facials.jpg";
import imgLaserHairRemoval from "../../public/Images/newServicesComponent/Laser-hair-removal.jpg";
import imgLaserSkinTherapy from "../../public/Images/newServicesComponent/Laser-skin-therapy.jpg";
import imgMesotherapy from "../../public/Images/newServicesComponent/Mesotherapy.jpg";
import imgMicrodermabrasion from "../../public/Images/newServicesComponent/Microdermabrasion.jpg";
import imgSkinAllergy from "../../public/Images/hemopathic-img/skin-allergy.jpg";
import imgPsoriasis from "../../public/Images/hemopathic-img/psoriasis.jpg";
import imgEczema from "../../public/Images/hemopathic-img/eczema.jpg";
import imgUrticaria from "../../public/Images/hemopathic-img/urticaria.jpg";
import imgFungal from "../../public/Images/hemopathic-img/fungal.jpg";
import imgScabies from "../../public/Images/hemopathic-img/scabies.jpg";
import imgVitiligo from "../../public/Images/hemopathic-img/vitiligo-white-spot.jpg";
import imgAlopecia from "../../public/Images/hemopathic-img/alopecia-areata.jpg";
import imgDermatitis from "../../public/Images/hemopathic-img/dermatitis.jpg";
// Additional imports for new services
import imgKoreanFacial from "../../public/Images/newServicesComponent/Facials.jpg"; // Placeholder for Korean Facial
import imgVampireFacial from "../../public/Images/newServicesComponent/Anti-aging-solutions.jpg"; // Placeholder for Vampire Facial
import imgSRF from "../../public/Images/newServicesComponent/Laser-skin-therapy.jpg"; // Placeholder for SRF
import imgHydrafacial from "../../public/Images/newServicesComponent/Facials.jpg"; // Placeholder for Hydrafacial
// imgMicrodermabrasion already imported
export const servicesExpanded = [
  {
    id: "pigmentation-solutions",
    title: "Pigmentation Solutions",
    short:
      "Target uneven tone and dark spots with advanced corrective protocols.",
    overview: {
      title: "Personalized Pigmentation Correction",
      description:
        "Our pigmentation solutions combine dermaceutic actives, controlled exfoliation, and targeted device-based approaches to gradually even skin tone while safeguarding barrier health.\n\nProtocols are customised after in-depth assessment and may include brightening peels, melanin-inhibiting serums, low-energy laser toning, and supportive home care.",
    },
    image: imgPigmentation,
    included: [
      "Assessment & Wood lamp check",
      "Customized peel/laser plan",
      "Post-care guide",
    ],
    excluded: [
      "Unrelated dermatological prescriptions",
      "Systemic medications",
    ],
  },
  {
    id: "skin-tightening",
    title: "Skin Tightening",
    short: "Stimulate collagen for firmer, lifted facial contours.",
    overview: {
      title: "Non‑Surgical Skin Firming",
      description:
        "Energy-based modalities and bio‑stimulatory actives are layered strategically to support dermal density.",
    },
    image: imgSkinTightening,
    included: ["Consult & mapping", "Energy session", "After-care"],
    excluded: ["Invasive surgery"],
  },
  {
    id: "hair-prp",
    title: "Hair PRP/GFC",
    short: "Concentrated platelet growth factors to revive follicles.",
    overview: {
      title: "Autologous PRP Therapy",
      description: "Platelet concentrate supports regeneration signalling.",
    },
    image: imgHairPRP,
    included: ["PRP preparation", "Scalp application"],
    excluded: ["Hair transplant"],
  },
  // {
  //   id: "hair-gfc",
  //   title: "HAIR GFC",
  //   short: "Growth Factor Concentrate for amplified follicle stimulation.",
  //   overview: {
  //     title: "High-Purity GFC Infusion",
  //     description: "Refined growth factors in a controlled protocol.",
  //   },
  //   image: imgHairGFC,
  //   included: ["GFC kit", "Sterile application"],
  //   excluded: ["PRP (separate)"],
  // },
  {
    id: "hair-regrowth-laser",
    title: "Hair Regrowth",
    short: "Low‑level laser therapy to energize dormant follicles.",
    overview: {
      title: "Photobiomodulation for Scalp Health",
      description: "LLLT improves cellular respiration and micro‑circulation.",
    },
    image: imgHairRegrowthLaser,
    included: ["Laser session", "Progress tracking"],
    excluded: ["Medication courses"],
  },
  {
    id: "korean-skin-treatment",
    title: "Korean Skin Treatment",
    short:
      "Hydration layering and barrier renewal inspired by Korean aesthetics.",
    overview: {
      title: "Layered Hydration & Glow",
      description:
        "A multi‑phase protocol focusing on gentle resurfacing and deep moisture infusion.",
    },
    image: imgKoreanSkin,
    included: ["Cleansing phases", "Essence infusion"],
    excluded: ["Injectables"],
  },
  // {
  //   id: "botox-treatment",
  //   title: "Botox Treatment",
  //   short:
  //     "Precision neuromodulator application for expression line softening.",
  //   overview: {
  //     title: "Targeted Dynamic Line Relaxation",
  //     description: "Focused units for natural, refreshed appearance.",
  //   },
  //   image: imgBotox,
  //   included: ["Assessment", "Unit mapping"],
  //   excluded: ["Dermal fillers"],
  // },
  {
    id: "anti-aging-solutions",
    title: "Anti-aging Solutions",
    short:
      "Holistic protocols addressing texture, tone, firmness, and radiance.",
    overview: {
      title: "Age-Resilience Strategy",
      description: "Stacked modalities tailored to individual aging patterns.",
    },
    image: imgAntiAging,
    included: ["Multi-modality plan"],
    excluded: ["Surgical lifting"],
  },
  {
    id: "deep-peelings",
    title: "Deep Peelings",
    short: "Advanced controlled exfoliation for stubborn irregularities.",
    overview: {
      title: "Precision Medium / Deep Peels",
      description:
        "Applied by trained clinician with strict downtime guidance.",
    },
    image: imgDeepPeelings,
    included: ["Peel application", "After-care kit"],
    excluded: ["Unrelated meds"],
  },
  {
    id: "facials",
    title: "Facials",
    short: "Therapeutic facials combining actives & lymphatic flow support.",
    overview: {
      title: "Custom Corrective Facials",
      description:
        "Each session adapts exfoliation, hydration, sculpting, and barrier repair.",
    },
    image: imgFacials,
    included: ["Custom protocol"],
    excluded: ["Prescription meds"],
  },

  {
    id: "laser-skin-therapy",
    title: "Laser Skin Therapy",
    short: "Tone, texture, and clarity improvements via calibrated light.",
    overview: {
      title: "Fractional & Toning Approaches",
      description: "Combines low‑fluence and fractional passes.",
    },
    image: imgLaserSkinTherapy,
    included: ["Laser passes"],
    excluded: ["Peels (separate)"],
  },
  {
    id: "mesotherapy",
    title: "Mesotherapy",
    short: "Micro‑dosed actives improving dermal nutrition & glow.",
    overview: {
      title: "Multi‑Micro Infusion",
      description: "Fine delivery of vitamins, peptides, and boosters.",
    },
    image: imgMesotherapy,
    included: ["Sterile actives"],
    excluded: ["PRP kit"],
  },
  {
    id: "microdermabrasion",
    title: "Microdermabrasion",
    short: "Mechanical resurfacing to refine texture and luminosity.",
    overview: {
      title: "Crystal / Diamond Precision Resurfacing",
      description: "Gentle epidermal renewal stimulating turnover.",
    },
    image: imgMicrodermabrasion,
    included: ["Exfoliation pass"],
    excluded: ["Chemical peel"],
  },
  {
    id: "skin-allergy",
    title: "Skin Allergy Treatment",
    short: "Comprehensive care for allergic skin reactions and sensitivities.",
    overview: {
      title: "Allergic Skin Reaction Management",
      description: "Diagnosis and treatment of various skin allergies including contact dermatitis, atopic dermatitis, and other allergic manifestations.",
    },
    image: imgSkinAllergy,
    included: ["Allergy assessment", "Topical treatments", "Lifestyle guidance"],
    excluded: ["Systemic medications"],
  },
  {
    id: "psoriasis",
    title: "Psoriasis Treatment",
    short: "Advanced therapies for psoriasis management and symptom relief.",
    overview: {
      title: "Psoriasis Care Protocol",
      description: "Comprehensive treatment approaches for psoriasis including topical therapies, light therapy, and supportive care for symptom management.",
    },
    image: imgPsoriasis,
    included: ["Skin assessment", "Treatment planning", "Follow-up care"],
    excluded: ["Systemic immunosuppressants"],
  },
  {
    id: "eczema",
    title: "Eczema Treatment",
    short: "Gentle care for eczema-prone skin to reduce inflammation and itching.",
    overview: {
      title: "Eczema Management",
      description: "Specialized protocols for eczema treatment focusing on barrier repair, anti-inflammatory therapies, and moisturization strategies.",
    },
    image: imgEczema,
    included: ["Skin evaluation", "Barrier repair treatments", "Moisturizing regimen"],
    excluded: ["Steroid prescriptions"],
  },
  {
    id: "scales",
    title: "Scales Treatment",
    short: "Treatment for scaly skin conditions and exfoliation disorders.",
    overview: {
      title: "Scaly Skin Condition Care",
      description: "Targeted treatments for various scaling skin conditions including ichthyosis, xerosis, and other exfoliative disorders.",
    },
    image: imgDeepPeelings, // placeholder - no specific image
    included: ["Scalp/skin assessment", "Exfoliation therapy", "Hydration protocols"],
    excluded: ["Internal medications"],
  },
  {
    id: "urticaria",
    title: "Urticaria Treatment",
    short: "Management of hives and urticaria with anti-inflammatory approaches.",
    overview: {
      title: "Hives and Urticaria Care",
      description: "Comprehensive treatment for acute and chronic urticaria focusing on trigger identification and symptomatic relief.",
    },
    image: imgUrticaria,
    included: ["Trigger assessment", "Anti-inflammatory treatments", "Preventive measures"],
    excluded: ["Emergency epinephrine"],
  },
  {
    id: "fungal",
    title: "Fungal Infection Treatment",
    short: "Effective treatment for various fungal skin infections.",
    overview: {
      title: "Antifungal Therapy",
      description: "Targeted treatment protocols for fungal infections including ringworm, athlete's foot, and other mycotic skin conditions.",
    },
    image: imgFungal,
    included: ["Fungal culture/diagnosis", "Antifungal treatments", "Prevention guidance"],
    excluded: ["Oral antifungals"],
  },
  {
    id: "scabies",
    title: "Scabies Treatment",
    short: "Comprehensive treatment for scabies infestation and prevention.",
    overview: {
      title: "Scabies Eradication Protocol",
      description: "Complete treatment approach for scabies including topical therapies, environmental decontamination, and family treatment.",
    },
    image: imgScabies,
    included: ["Diagnosis confirmation", "Topical treatment", "Environmental cleaning"],
    excluded: ["Oral medications"],
  },
  {
    id: "vitiligo-white-spot",
    title: "Vitiligo White Spot Treatment",
    short: "Repigmentation therapies for vitiligo and leukoderma.",
    overview: {
      title: "Vitiligo Management",
      description: "Advanced treatment options for vitiligo including phototherapy, topical treatments, and repigmentation strategies.",
    },
    image: imgVitiligo,
    included: ["Skin evaluation", "Phototherapy sessions", "Topical treatments"],
    excluded: ["Surgical interventions"],
  },
  {
    id: "alopecia-areata",
    title: "Alopecia Areata Treatment",
    short: "Treatment for autoimmune hair loss conditions.",
    overview: {
      title: "Autoimmune Hair Loss Care",
      description: "Comprehensive approach to alopecia areata treatment including topical therapies, injections, and supportive care.",
    },
    image: imgAlopecia,
    included: ["Scalp assessment", "Treatment planning", "Progress monitoring"],
    excluded: ["Systemic immunosuppressants"],
  },
  {
    id: "korean-facial",
    title: "Korean Facial",
    short: "Rejuvenating facial treatment inspired by Korean skincare routines.",
    overview: {
      title: "Korean Skincare Facial",
      description: "A multi-step facial treatment incorporating hydrating masks, exfoliation, and nourishing serums for glowing skin.",
    },
    image: imgKoreanFacial,
    included: ["Deep cleansing", "Exfoliation", "Hydrating mask", "Serum application"],
    excluded: ["Chemical peels"],
  },
  {
    id: "vampire-facial",
    title: "Vampire Facial",
    short: "Platelet-rich plasma facial for skin rejuvenation.",
    overview: {
      title: "PRP Facial Therapy",
      description: "Utilizing your own platelet-rich plasma to stimulate collagen production and improve skin texture and tone.",
    },
    image: imgVampireFacial,
    included: ["Blood draw", "PRP preparation", "Facial application", "Post-care instructions"],
    excluded: ["Fillers or Botox"],
  },
  {
    id: "srf",
    title: "SRF Treatment",
    short: "Skin Rejuvenation Facial for anti-aging benefits.",
    overview: {
      title: "Advanced Skin Rejuvenation",
      description: "Non-invasive treatment combining microdermabrasion, chemical exfoliation, and LED therapy for youthful skin.",
    },
    image: imgSRF,
    included: ["Microdermabrasion", "Chemical exfoliation", "LED therapy", "Moisturizing treatment"],
    excluded: ["Laser treatments"],
  },
  {
    id: "hydrafacial",
    title: "Hydrafacial",
    short: "Hydrating facial treatment for deep cleansing and nourishment.",
    overview: {
      title: "HydraFacial Therapy",
      description: "A multi-step facial that cleanses, exfoliates, and hydrates the skin using a patented vortex technology for a refreshed complexion.",
    },
    image: imgHydrafacial,
    included: ["Deep cleansing", "Exfoliation", "Hydration infusion", "Antioxidant protection"],
    excluded: ["Chemical peels"],
  },
  {
    id: "microdermabrasion",
    title: "Microdermabrasion",
    short: "Gentle exfoliation to improve skin texture and tone.",
    overview: {
      title: "Microdermabrasion Treatment",
      description: "Non-invasive procedure that uses fine crystals to exfoliate the skin, reducing fine lines, acne scars, and improving overall skin texture.",
    },
    image: imgMicrodermabrasion,
    included: ["Skin assessment", "Exfoliation treatment", "Moisturizing mask", "Sun protection advice"],
    excluded: ["Deep chemical peels"],
  },
  {
    id: "hair-gfc-therapy",
    title: "Hair GFC Therapy",
    short: "Growth Factor Concentrate therapy for hair restoration.",
    overview: {
      title: "Hair GFC Treatment",
      description: "Advanced therapy using growth factor concentrates to stimulate hair follicles, promote hair growth, and improve scalp health.",
    },
    image: imgHairGFC,
    included: ["Scalp analysis", "GFC application", "Post-treatment care", "Progress monitoring"],
    excluded: ["Surgical hair transplants"],
  },
  {
    id: "regrowth",
    title: "Hair Regrowth",
    short: "Comprehensive solutions for hair regrowth and restoration.",
    overview: {
      title: "Hair Regrowth Treatments",
      description: "A range of therapies including PRP, laser treatments, and topical solutions to promote natural hair regrowth and prevent further loss.",
    },
    image: imgHairRegrowthLaser,
    included: ["Scalp consultation", "Regrowth treatment plan", "Follow-up sessions", "Home care advice"],
    excluded: ["Hair transplant surgery"],
  },
  {
    id: "micro-needling-prp",
    title: "Micro Needling with PRP",
    short: "Collagen induction therapy combined with platelet-rich plasma.",
    overview: {
      title: "Micro Needling PRP Treatment",
      description: "Microneedling creates micro-injuries to stimulate collagen, enhanced with PRP for faster healing and better results in acne scar reduction.",
    },
    image: imgMesotherapy,
    included: ["Skin assessment", "Microneedling session", "PRP application", "Post-care instructions"],
    excluded: ["Laser treatments"],
  },
  {
    id: "mnrf",
    title: "MNRF Treatment",
    short: "Microneedling Radiofrequency for skin tightening and scar reduction.",
    overview: {
      title: "Microneedling RF Therapy",
      description: "Combines microneedling with radiofrequency energy to deliver heat to deeper skin layers, promoting collagen production and improving acne scars.",
    },
    image: imgLaserSkinTherapy,
    included: ["Consultation", "RF microneedling session", "Cooling and soothing", "Recovery guidance"],
    excluded: ["Surgical procedures"],
  },
  {
    id: "chemical-peel",
    title: "Chemical Peel",
    short: "Exfoliating treatment to improve skin texture and reduce acne scars.",
    overview: {
      title: "Chemical Peel for Acne Scars",
      description: "Application of chemical solutions to remove damaged skin layers, revealing smoother, healthier skin underneath and reducing scar appearance.",
    },
    image: imgDeepPeelings,
    included: ["Skin type assessment", "Peel application", "Neutralization", "Aftercare products"],
    excluded: ["Deep laser resurfacing"],
  },
 {
  id: "laser-tattoo-removal-jaipur",

  title: "Laser Tattoo Removal in Jaipur – Safe & Effective Treatment with Dskinova",

  short:
    "Safe, effective, modern Laser Tattoo Removal treatment in Jaipur — minimal pain, advanced technology, clear & smooth skin with Dskinova.",

  overview: {
    title: "Laser Tattoo Removal Treatment",
    description:
      "Laser tattoo removal is a safe, modern, non-invasive treatment that uses advanced laser technology to break down ink particles under the skin, allowing your body to naturally eliminate them over time. Dskinova offers professional, effective, and comfortable tattoo removal in Jaipur.",
  },

  image: imgLaserHairRemoval,

  included: [
    "Consultation",
    "Q-switched / PicoSure laser sessions",
    "Cooling during treatment",
    "Post-treatment care instructions"
  ],

  excluded: [
    "Tanning or sunburn before session",
    "Scratching or picking treated skin",
    "Chemical peels immediately before"
  ],

  /* ------------------ MAIN H1 ------------------ */

  // mainh1: "Laser Tattoo Removal in Jaipur – Safe & Effective Treatment with Dskinova",

  // mainh1data:
  //   "Tattoos are a beautiful means of expression, and at times you do not wish them to reflect your style or story any more. It could be a long-lived design, a tarnished tattoo, or a case of regrets, which can be solved with the help of laser tattoo removal in Jaipur, which is a safe, contemporary, and effective method. We are Dskinova who deal in professional laser tattoo removal in Jaipur and are able to assist clients in achieving clear and smooth skin with minimum pain.",

  // /* ------------------ WHAT IS LASER TATTOO REMOVAL ------------------ */

  // firsth2: "What is Laser Tattoo Removal?",

  // firsth2data:
  //   "Laser tattoo removal in Jaipur is an arduous treatment which is non-invasive and involves the usage of high laser light to fragment tattoo ink particles below the skin. The body is capable of getting rid of these tiny pieces of ink as time goes by thus fading away the tattoo. Laser tattoo removal is also accurate as compared to other techniques such as dermabrasion or chemical treatment and skin around the tattoo is not harmed which minimizes chances of scarring in Jaipur.",

  // /* ------------------ HOW IT WORKS ------------------ */

  // sech2: "How Does the Procedure Work?",

  // sech2data:
  //   "In Dskinova, we have the technology of Q-switched and PicoSure lasers which are used to target the pigments of tattoos. Laser pulses are directed into the skin during treatment so as to dispersed the ink into small particles. Many of these sessions are determined by the size, color and depth of tattoos and where the tattoo is placed. Multi colored tattoos and especially the green and blue inks may take more sessions before they are completely removed. The majority of patients only have mild discomfort, it is normally termed as snapping or tingling. The sessions are normally brief, of 15-45 minutes, depending on the size and the complexity of the tattoo.",

  // /* ------------------ BENEFITS ------------------ */

  // firsth3: "Benefits of Laser Tattoo Removal",

  // firsth3data:
  //   "The decision to undergo laser tattoo removal in Jaipur at Dskinova is associated with a number of benefits:\n• Safe and non-invasive: No cutting or surgery is required.\n• Effective on multiple colors: Modern lasers can handle a variety of pigments.\n• Minimal scarring: Professional treatment ensures smooth, healthy skin.\n• Gradual fading: Tattoos lighten naturally over time for a better aesthetic result.",

  // /* ------------------ COST & CHOOSING CLINIC ------------------ */

  // sech3: "Cost and Choosing the Right Clinic",

  // sech3data:
  //   "The prices of laser tattoo removal in Jaipur are dependent on the size, color and number of laser tattoo removal sessions. Small tattoos can begin at ₹2,000–3,000 per session, and bigger tattoos or multicolor ones can be more expensive. A certified clinic such as Dskinova would guarantee a safe and effective laser tattoo removal in Jaipur with lasting effects. With qualified dermatologists and advanced technology, we offer the best services in getting rid of your tattoos so that your tattoo removal experience can be safe and comfortable.",

  // /* ------------------ PRE & POST CARE ------------------ */

  // thih3: "Pre- and Post-Treatment Care",

  // thih3data:
  //   "Before and after-session proper care is the key to optimal outcomes. Prior to treatment, do not tan or sunburn, and adhere to skin preparation directions. Keep the area clean, moist, and protected from sunlight after the session. Complications may arise from scratching or picking the treated skin.",

  // /* ------------------ CONCLUSION ------------------ */

  // conclusionTitle: "Conclusion",

  // conclusionData:
  //   "In case you are willing to get rid of an unwanted tattoo, laser tattoo removal in Jaipur, Dskinova is the best and safest choice. Dskinova is the place where you can get a clear and tattoo-free skin with the help of the most advanced equipment of lasers, qualified experts, and individual approach. Get a step closer to smooth and clean skin and make an appointment at Dskinova to get your laser tattoos removed in Jaipur.",

  /* ------------------ SEO ------------------ */

  seo: {
    focus_keyphrase: "laser tattoo removal in jaipur",
    meta_title: "Laser Tattoo Removal in Jaipur – Safe & Effective | Dskinova",
    meta_description:
      "Professional Laser Tattoo Removal in Jaipur with Q-switched & PicoSure technology. Safe, effective, minimal pain, and dermatologist-supervised treatments at Dskinova.",
    slug: "laser-tattoo-removal-jaipur"
  }
},
 {
  id: "laser-hair-removal-treatment-in-jaipur",

  title: "Laser Hair Removal Treatment in Jaipur – Say Goodbye to Unwanted Hair | Dskinova",

  short: "Permanent hair reduction using advanced laser technology, providing long-lasting smooth and hair-free skin.",

  overview: {
    title: "Laser Hair Removal Treatment",
    description:
      "Safe and effective laser technology targets hair follicles to reduce unwanted hair growth, providing long-lasting smooth skin without irritation.",
  },

  image: imgLaserHairRemoval,

  included: [
    "Consultation",
    "Laser sessions",
    "Skin cooling",
    "Post-treatment care"
  ],

  excluded: [
    "Waxing or shaving immediately before",
    "Bleaching before treatment",
    "Hot showers right after session"
  ],

  // /* ------------------ MAIN HEADING ------------------ */

  // mainh1: "Experience Smooth, Hair-Free Skin Like Never Before",

  // mainh1data:
  //   "Weary of forever shaving or waxing or threading? It is time to change to a more complex and long-lasting solution. Laser hair removal treatment at Dskinova, Jaipur, is a safe and painless and long term method of removing unwanted hair. Dskinova will bring up the glowing skin without the inconvenience of visiting the salon frequently with the help of high-quality laser technology and professional dermatological services.",

  // /* ------------------ WHAT IS LASER HAIR REMOVAL ------------------ */

  // firsth2: "What Is Laser Hair Removal?",

  // firsth2data:
  //   "Laser hair removal is a procedure which is scientifically proven to be targeted at the hair follicles and with the use of focused energy of light. This light kills the root of unwanted hair hence growth is slowed in the long run. Dskinova’s laser hair removal treatment in Jaipur is the new method when compared to the conventional techniques, which leaves long lasting effects and produces soft and flawless skin with little discomfort at Dskinova Jaipur. It can be applied on the face, arms, legs, back, bikini region, and underarms as it is appropriate on all types of skin.",

  // /* ------------------ WHY CHOOSE LASER HAIR REMOVAL ------------------ */

  // sech2: "Why Choose Laser Hair Removal in Jaipur?",

  // sech2data:
  //   "With the new technology in skincare and the use of qualified professionals, Jaipur is rapidly turning out to be a place where permanent hair removal surgeries are undertaken. Dskinova is one of the leading laser hair removal treatment in Jaipur with its combination of innovation, safety and the price. All the treatments are carried out under the care of the experts using the laser machines approved by the FDA which are comfortable and precise. Have you a need to have smooth legs or a back that is free of hair, Dskinova will give you confidence in the long term beauty.",

  // /* ------------------ HOW THE TREATMENT WORKS ------------------ */

  // sech20: "How the Treatment Works",

  // sech20data:
  //   "It starts with the personalized consulting in which they test your skin and hair type. The professional staff in Dskinova Jaipur then tailors the lasers to be suitable to your comfort and efficiency. The laser is also applied during the session to hair roots only and does not cause damage to the surrounding skin. Depending on the thickness of your hair and its growth pattern, you might require several sessions in order to achieve maximum results. Cooling is done after the treatment so that there is no irritation and you are left with soft and rejuvenated skin.",

  // /* ------------------ BENEFITS ------------------ */

  // firsth3: "Benefits of Laser Hair Removal Treatment In Jaipur",

  // firsth3data:
  //   "Permanent Hair Reduction: Experience permanent smoothing with minimal touch ups.\nNo Skin Damage: Lasers do not result in cuts and rashes like waxing and threading.\nFast and Non-Painful: Sessions are brief and almost painless.\nGetting Soft and Clear Skin: Removes ingrowth of hair and improves skin texture.\nTime and Cost Effective: No longer are there monthly salon bills to pay and regular grooming.",

  // /* ------------------ BEST LASER CLINIC ------------------ */

  // firstth30: "Why Choose Dskinova – The Best Laser Clinic in Jaipur",

  // firstth30data:
  //   "Dskinova is considered to be among the top skincare and modern technology laser hair removal centers in Jaipur. Their certified dermatologists operate on the finest devices to provide safe, hygienic and result-oriented treatments. The clinic concentrates on individual treatment, which means every client receives an individual plan concerning his/her skin complexion and hair type. In Dskinova, comfort, safety and results can be seen come together to create an unparalleled experience.",

  // /* Duplicate HOW IT WORKS text removed? → NO! You said nothing should be removed. So we keep it. */

 
  // /* ------------------ PRE & POST CARE ------------------ */

  // firstth31: "Pre and Post-Treatment Care",

  // firstth31data:
  //   "The tips to care about to maximize your laser hair removal treatment in Jaipur are:\nPreamble: Waxing, threading, bleaching: do not do it within two weeks before Treatment.\nPost-Treatment: Wear sunscreen, take care not to take hot showers and make sure that your skin is hydrated.\nThese few tips will keep giving long-lasting effects and keep your post treatment glow.",

  // /* ------------------ COST ------------------ */

  // sech3: "Cost of Laser Hair Removal in Jaipur",

  // sech3data:
  //   "The prices of laser hair removal treatment in Jaipur are varying based on the location of the hair removal, the number of sessions needed, and your hair growing cycle. Dskinova has got good packages that cater to both men and women at a low cost. Their affordable packages are such that everyone can have a hassle-free, smooth, hair-free skin without emptying their pockets.",

  // /* ------------------ MYTHS ------------------ */

  // thih3: "Common Myths About Laser Hair Removal",

  // thih3data:
  //   "Myth 1: Laser hair removal is painful.\n■ Fact: Dskinova’s laser technology is nearly painless with cooling sensations.\nMyth 2: It’s only for women.\n■ Fact: Many men in Jaipur choose laser treatment for chest, back, and beard shaping.\nMyth 3: It damages the skin.\n■ Fact: At Dskinova, treatments are safe, dermatologically tested, and non-invasive.",

  // /* ------------------ CONCLUSION ------------------ */

  // fourh3: "Conclusion – Reveal Your Confidence with Dskinova",

  // fourh3data:
  //   "Extra hair should not be a reason to feel bad and not be a beauty. Through the laser hair removal treatment in Jaipur at Dskinova, you get the chance to have a silky-smooth skin, long lasting results and a new feeling of self. Finding the right balance between science and beauty with Dskinova, your preferred choice in permanent hair removal in Jaipur.\n■ Book your consultation today and let Dskinova redefine your beauty, one smooth session at a time.",

  // /* ------------------ SEO ------------------ */

  seo: {
    focus_keyphrase: "laser hair removal in jaipur",
    meta_title: "Laser Hair Removal in Jaipur – Safe & Professional Treatment",
    meta_description:
      "Laser hair removal in Jaipur at Dskinova – safe, effective, long-lasting, and dermatologist-supervised. Book your session today!",
    slug: "laser-hair-removal-treatment-in-jaipur"
  }
}

,
  {
  id: "eczema",
  title: "Eczema Treatment",
  short: "Relief and management solutions for eczema-prone skin.",
  overview: {
    title: "Eczema Treatment",
    description: "Specialized therapies designed to soothe irritation, reduce inflammation, and strengthen the skin barrier for individuals suffering from eczema."
  },
  image: imgEczema, // import an eczema-related image
  included: ["Skin soothing therapies", "Barrier repair", "Hydration treatments"],
  excluded: ["Not suitable for active infections"]
},
{
  id: "dermatitis",
  title: "Dermatitis Treatment",
  short: "Effective care for managing skin inflammation and irritation.",
  overview: {
    title: "Dermatitis Care",
    description: "Customized treatments designed to relieve itching, reduce redness, and calm skin irritation caused by different types of dermatitis."
  },
 
  image: imgDermatitis, 
  included: ["Anti-inflammatory therapies", "Moisturizing treatments", "Barrier repair"],
  excluded: ["Not suitable for untreated infections"]
},
{
  id: "alopecia-areata",
  title: "Alopecia Areata Treatment",
  short: "Targeted therapies for patchy hair loss caused by autoimmune response.",
  overview: {
    title: "Alopecia Areata Care",
    description: "Specialized treatments to stimulate hair regrowth, reduce inflammation, and manage autoimmune-related hair loss effectively."
  },
  // Optional: add image later
  image: imgAlopecia,
  included: ["Steroid injections", "Topical immunotherapy", "Growth stimulating therapies"],
  excluded: ["Not suitable without medical consultation"]
}




];

export function getExpandedService(id) {
  return servicesExpanded.find((s) => s.id === id);
}
