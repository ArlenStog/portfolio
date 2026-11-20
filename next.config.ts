import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Plain static site: deploys to Vercel, Netlify or GitHub Pages as-is.
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
