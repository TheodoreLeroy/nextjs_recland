"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import file CSS bắt buộc của AOS

export default function AOSProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      // Bạn có thể cấu hình các tùy chọn mặc định ở đây
      duration: 800,
      once: true, // Chỉ chạy hiệu ứng một lần duy nhất khi cuộn qua
    });
  }, []);

  return <>{children}</>;
}
