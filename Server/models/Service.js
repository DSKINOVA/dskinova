import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    short: { type: String, default: "" },
    price: { type: Number, default: 0 },
    currency: { type: String, default: "₹" },
    priceNote: { type: String, default: "per session" },
    category: { type: String, default: "Skin" }, // e.g. Skin, Hair, Homeopathic, Wellness
    subcategory: { type: String, default: "" }, // e.g. Anti Aging, Acne Scar, Pigmentation
    image: { type: String, default: "" },
    overview: {
      title: { type: String, default: "Overview" },
      description: { type: String, default: "" },
    },
    included: { type: [String], default: [] },
    excluded: { type: [String], default: [] },
    additionalInfo: {
      duration: { type: String, default: "" },
      sessions: { type: String, default: "" },
      results: { type: String, default: "" },
    },
    beforeAfter: {
      image: { type: String, default: "" },
      heading: { type: String, default: "" },
      description: { type: String, default: "" },
      points: { type: [String], default: [] },
    },
    seo: {
      meta_title: { type: String, default: "" },
      meta_description: { type: String, default: "" },
      focus_keyphrase: { type: String, default: "" },
      slug: { type: String, default: "" },
    },
  },
  { timestamps: true }
);

const Service = mongoose.models.Service || mongoose.model("Service", serviceSchema);
export default Service;
