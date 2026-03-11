import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    // Allow all local images from the /public folder
    unoptimized: false,
  },
};

export default nextConfig;
