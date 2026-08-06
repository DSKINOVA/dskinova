import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import Admin from "./models/Admin.js";

dotenv.config();

const { MONGODB_URI, ADMIN_USERNAME, ADMIN_PASSWORD } = process.env;

/**
 * Seeds the admin user from .env credentials.
 * - If no admin exists, creates one.
 * - If admin exists with a different username/password, updates it.
 * - Safe to call multiple times (idempotent).
 */
export async function seedAdmin() {
  if (!ADMIN_USERNAME || !ADMIN_PASSWORD) {
    console.log("⚠️  ADMIN_USERNAME / ADMIN_PASSWORD not set in .env — skipping admin seed.");
    return;
  }

  try {
    const existing = await Admin.findOne({});

    if (existing) {
      // Check if credentials match
      const sameUser = existing.username === ADMIN_USERNAME;
      const samePwd = await bcrypt.compare(ADMIN_PASSWORD, existing.passwordHash);

      if (sameUser && samePwd) {
        console.log(`✅ Admin already exists (username: ${ADMIN_USERNAME})`);
        return;
      }

      // Update credentials
      existing.username = ADMIN_USERNAME;
      existing.passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 10);
      await existing.save();
      console.log(`🔄 Admin credentials updated (username: ${ADMIN_USERNAME})`);
      return;
    }

    // Create new admin
    const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 10);
    await Admin.create({ username: ADMIN_USERNAME, passwordHash });
    console.log(`🎉 Admin created successfully (username: ${ADMIN_USERNAME})`);
  } catch (err) {
    console.error("❌ Admin seed error:", err.message);
  }
}

// Allow running directly: node createAdmin.js
const isDirectRun = process.argv[1]?.replace(/\\/g, "/").endsWith("createAdmin.js");

if (isDirectRun) {
  if (!MONGODB_URI) {
    console.error("❌ MONGODB_URI not set in .env");
    process.exit(1);
  }

  mongoose
    .connect(MONGODB_URI)
    .then(() => {
      console.log("MongoDB connected");
      return seedAdmin();
    })
    .then(() => {
      console.log("Done!");
      process.exit(0);
    })
    .catch((err) => {
      console.error("Failed:", err);
      process.exit(1);
    });
}
