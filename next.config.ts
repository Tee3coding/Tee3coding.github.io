import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export -> `out/` folder, ready for GitHub Pages
  output: "export",
  // Emit /route/index.html so URLs like /123/hidden/ work on GitHub Pages
  trailingSlash: true,
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
