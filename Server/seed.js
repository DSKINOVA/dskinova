import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Admin from "./models/Admin.js";

const { MONGODB_URI } = process.env;

async function run() {
  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not set in environment");
  }
  await mongoose.connect(MONGODB_URI, {});
  console.log("MongoDB connected");

  const username = "admin";
  const password = "admin123";

  let admin = await Admin.findOne({ username });
  if (admin) {
    console.log(
      `Admin user '${username}' already exists. Updating password...`
    );
    admin.passwordHash = await bcrypt.hash(password, 10);
    await admin.save();
  } else {
    const passwordHash = await bcrypt.hash(password, 10);
    await Admin.create({ username, passwordHash });
    console.log(`Seeded admin user '${username}'.`);
  }

  await mongoose.disconnect();
  console.log("MongoDB disconnected");
}

run().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
