import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "f1.dikidi.net" },
      { protocol: "https", hostname: "f2.dikidi.net" },
      { protocol: "https", hostname: "f1.dikidi.ru" },
      { protocol: "https", hostname: "f2.dikidi.ru" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "salonkrasoty76.ru" },
    ],
  },
};

export default nextConfig;
