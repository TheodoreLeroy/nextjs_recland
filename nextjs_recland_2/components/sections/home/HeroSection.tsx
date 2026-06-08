"use client";
import Container from "@/components/common/Container";
import Badge from "@/components/ui/Badge";
import CTA from "@/components/ui/CTA";
import { useState } from "react";

export default function HeroSection() {
  const [isShowTopCtv, setIsShowTopCtv] = useState<boolean>(false);

  return (
    <section
      className={`relative flex min-h-screen items-center bg-(image:--bg-hero)
        bg-cover bg-center bg-no-repeat lg:bg-position-[100%_100%]`}
    >
      <Container>
        {/* 1. Đổi sang flex-col trên mobile, lên lg: mới chuyển sang hàng ngang flex-row
          2. Giảm padding px-5 trên mobile, lên md/lg mới tăng dần lên cho thoáng
          3. Bỏ min-h cố định bằng số pixel cứng, để tự động giãn theo content
        */}
        <div
          className={`flex w-full flex-col items-center gap-8 px-5 py-12
            sm:px-10 md:py-20 lg:flex-row lg:justify-between lg:gap-10 lg:px-15`}
        >
          {/* Cụm Text Content bọc lại để quản lý layout không bị vỡ */}
          <div
            className={`flex w-full max-w-2xl flex-col items-center text-center
              lg:items-start lg:text-left`}
          >
            <Badge>Recruitment Marketplace</Badge>

            <h1
              className={`mb-5 text-[2rem] leading-tight font-extrabold
                text-white sm:text-[2.5rem] md:text-[2.75rem] lg:text-[3.25rem]`}
            >
              Tuyển dụng bằng{" "}
              <span
                className={`bg-linear-to-r from-amber-400 to-yellow-400
                  bg-clip-text font-extrabold text-transparent`}
              >
                mạng lưới Recruiter
              </span>{" "}
              lớn nhất Việt Nam
            </h1>

            <p
              className={`mb-8 max-w-xl text-[0.95rem] leading-[1.6]
                text-[#c2eaf4]/90 sm:text-[1.125rem]`}
            >
              Kết nối doanh nghiệp với hàng ngàn recruiter freelance và ứng viên
              chất lượng. Nhận CV phù hợp trong 24 giờ.
            </p>

            <CTA>Khám phá ngay</CTA>
          </div>

          {/* Khu vực dành cho khối 'Top cộng tác viên' hoặc hình ảnh bên phải (nếu bật) 
            Sẽ tự động xuống dưới ở mobile và đứng song song bên phải ở màn hình lớn
          */}
          <div className="flex w-full items-center justify-center lg:w-auto">
            {/* Thêm ảnh hoặc component Top CTV của bạn ở đây nếu cần hiển thị song song */}
          </div>
        </div>
      </Container>
    </section>
  );
}
