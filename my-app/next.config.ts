import type { NextConfig } from "next";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET, // Ensure it's accessible
  },
};

export default nextConfig;
