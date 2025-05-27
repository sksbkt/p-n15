import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["tenor.com"],
    disableStaticImages: true,
  },
};

export default nextConfig;
