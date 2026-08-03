import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema(
  {
    imageUrl: { type: String, required: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Certificate =
  mongoose.models.Certificate ||
  mongoose.model("Certificate", certificateSchema);

export default Certificate;
