import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hostinger runs this as a Node server so the forms can send mail.
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
