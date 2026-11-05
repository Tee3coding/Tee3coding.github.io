import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export -> `out/` folder, ready for GitHub Pages
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
