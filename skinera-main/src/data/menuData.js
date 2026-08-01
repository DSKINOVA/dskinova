// Structured menu data for Header (Skin & Hair)
// Keep href as '#' for now; images reference filenames from Images/ if you later want to show thumbnails.

export const skinMenu = [
  { label: "Acne Scar", href: "/laser-skin-therapy" },
  {
    label: "Anti Aging",
    href: "/anti-aging",
    children: [
      { label: "Korean Facial", href: "/korean-facial" },
      { label: "Vampire Facial", href: "/vampire-facial" },
      { label: "SRF", href: "/srf" },
    ],
  },
  {
    label: "Skin Lightening & Whitening",
    href: "/skin-lightening-and-whitening",
  },
  { label: "Cryotherapy Fat Freezing", href: "/cryo-fat-freezing" },
  { label: "Laser Tattoo Removal", href: "/laser-tattoo-removal-jaipur" },
  {
    label: "Pigmentation Treatments",
    href: "/pigmentation-treatments",
    children: [
      { label: "Chemical Peel Treatments", href: "/deep-peelings" },
      { label: "Laser Toning Treatments", href: "/laser-skin-therapy" },
      { label: "Mesotherapy", href: "/mesotherapy" },
      { label: "Microdermabrasion", href: "/microdermabrasion" },
      { label: "Carbon Laser Facial", href: "/laser-skin-therapy" },
    ],
  },
  {
    label: "Medical Spa Facials",
    href: "/medical-spa-facials",
    children: [
      { label: "Oxygeneo Facial", href: "/oxygeneo-facial" },
      { label: "Carbon Facial", href: "/carbon-facial" },
      { label: "Photo Facial", href: "/photo-facial" },
      { label: "Korean Facial", href: "/korean-facial" },
      { label: "Hydrafacial", href: "/hydrafacial" },
      { label: "Microdermabrasion", href: "/microdermabrasion" },
    ],
  },
 
  { label: "Stretch Marks", href: "/stretch-marks" },
  { label: "Pre Bridal Specials", href: "/pre-bridal-specials" },
];

export const skinNested = {
  "Acne Scar": {
    children: [
      { label: "Micro Needling with PRP", href: "/micro-needling-prp" },
      { label: "MNRF", href: "/mnrf" },
      { label: "Chemical Peel", href: "/chemical-peel" },
    ],
  },
  "Anti Aging": {
    children: [
      { label: "Korean Facial", href: "/korean-facial" },
      { label: "Vampire Facial", href: "/vampire-facial" },
      { label: "SRF", href: "/srf" },
    ],
  },
};

export const hairMenu = [
  {
    label: "Hairfall / Hair Thininig",
    href: "/hairfall",
    children: [
      {
        label: "Intralesional Injection",
        href: "/intralesional-injection",
      },
      { label: "Hair PRP/GFC Therapy", href: "/hair-prp" },
      { label: "Mesotherapy", href: "/mesotherapy" },
      {
        label: "Low Light Laser Therapy",
        href: "/hair-regrowth-laser",
      },
      // { label: "Hair GFC Therapy", href: "/hair-gfc-therapy" },
    ],
  },
  // { label: "Alopecia Areata", href: "/hair-gfc" },
    { label: "Hair Regrowth", href: "/regrowth" },
  { label: "Dandruff", href: "/dandruff" },
  { label: "Laser Hair Removal", href: "/laser-hair-removal-treatment-in-jaipur" },
  // { label: "Hair Transplant", href: "/hair-transplant" },
];

export const hemopathicMenu = [
  { label: "Skin Allergy", href: "/skin-allergy" },
  { label: "Psoriasis", href: "/psoriasis" },
  { label: "Eczema", href: "/eczema" },
  { label: "Scales", href: "/scales" },
  { label: "Urticaria", href: "/urticaria" },
  { label: "Fungal", href: "/fungal" },
  { label: "Scabies", href: "/scabies" },
  { label: "Vitiligo White Spot", href: "/vitiligo-white-spot" },
  { label: "Alopecia Areata", href: "/alopecia-areata" },
];

// Utility to get nested items for a given label
export const getNested = (section, label) => {
  if (section === "skin") return skinNested[label]?.children || [];
  return [];
};
