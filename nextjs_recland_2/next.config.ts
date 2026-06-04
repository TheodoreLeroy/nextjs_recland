import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // Cho phép build thành công bất chấp lỗi TypeScript
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
