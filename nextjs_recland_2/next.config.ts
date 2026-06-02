import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Kích hoạt xuất file tĩnh
  images: {
    unoptimized: true, // Bắt buộc: Tauri không chạy server node để tối ưu ảnh động được
  },
};

export default nextConfig;
