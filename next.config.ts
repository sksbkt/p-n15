import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["tenor.com", "img.icons8.com"],
    disableStaticImages: true,
  },
};

export default nextConfig;
