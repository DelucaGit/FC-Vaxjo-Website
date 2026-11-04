import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Plain HTML files for Hostinger. Search engines read the text in those files.
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
