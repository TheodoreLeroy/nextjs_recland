"use client";
import Link from "next/link";
import Image from "next/image";
import {
  RECLAND_LOGO_WHITE,
  NAVIGATION,
  EN_FLAG,
  RECLAND_LOGO,
} from "@/constants/ui";
import Button from "../ui/Button";
import { useUIStore } from "@/store/ui.store";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import LoginForm from "../ui/LoginForm";

type NavigationVariant = "primary" | "secondary";
interface Props {
  className?: string;
  variant?: NavigationVariant | string;
}

// Bạn nhớ định nghĩa thêm class Tailwind vào đây nếu cần nhé
const baseStyle: Record<string, string> = {
  primary: "bg-transparent text-white transition-all duration-300",
  secondary: "bg-[#115061] text-white shadow-md transition-all duration-300",
};

export default function Navigation({ className, variant = "primary" }: Props) {
  const { isScroll, setIsScroll } = useUIStore();

  // ✅ SỬA LỖI 1: Chuyển dấu {} thành dấu [] cho đúng cú pháp useState
  const [showLogin, setShowLogin] = useState<boolean>(false);

  const pathname = usePathname();
  const isHomePage = pathname === "/home";

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const shouldScroll = scrollTop > 50;
      if (useUIStore.getState().isScroll !== shouldScroll) {
        setIsScroll(shouldScroll);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIsScroll]);

  const handleLoginButton = () => {
    setShowLogin(!showLogin);
    // Bạn có thể xử lý bật modal đăng nhập hoặc điều hướng ở đây
    console.log("Trạng thái hiển thị Form Login:", !showLogin);
  };

  // Xác định variant thực tế dựa trên việc người dùng đã cuộn trang hay chưa
  const currentVariant = isHomePage
    ? isScroll
      ? "secondary"
      : variant
    : "secondary";
  const selectedStyle = baseStyle[currentVariant] || baseStyle["primary"];

  return (
    <section
      id="navbar"
      className={twMerge(
        "topnav home fixed top-0 left-0 z-50 w-full",
        selectedStyle,
        className,
      )}
    >
      <div className="container">
        <div className="flex_row flex items-center justify-between">
          {/* Mobile */}
          {/* ✅ SỬA LỖI 2: Truyền currentVariant xuống để MobileMenu đổi màu Logo khi cuộn */}
          <MobileMenu variant={currentVariant} />

          {/* Desktop */}
          <DesktopMenu
            variant={currentVariant}
            onLoginClick={handleLoginButton}
          />

          {/* Login popup */}
          {showLogin ? <LoginForm /> : ""}
        </div>
      </div>
    </section>
  );
}

function MobileMenu({ variant = "primary" }: Props) {
  return (
    <>
      <Link className="logo-mobile" title="new-ca" href="/home">
        {variant === "primary" ? (
          <Image
            className="logo-white h-full"
            src="/images/graphics/logo-white752b.png"
            alt="Logo White"
            width={48}
            height={48}
          />
        ) : (
          <Image
            className="logo-dark h-full"
            src="/images/graphics/logo752b.png"
            alt="Logo Dark"
            width={48}
            height={48}
          />
        )}
      </Link>
      <Link href="javascript:;" className="vibeji-ham">
        <svg className="icon-svg">
          <use xlinkHref="/images/icons/icon.svg#menu" />
        </svg>
      </Link>
    </>
  );
}

// Thêm prop onLoginClick vào interface riêng của DesktopMenu để truyền hàm xử lý sự kiện xuống
interface DesktopMenuProps extends Props {
  onLoginClick?: () => void;
}

function DesktopMenu({ variant = "primary", onLoginClick }: DesktopMenuProps) {
  return (
    <div className="flex_right flex items-center gap-4">
      <div className="main-menu">
        <ul className="nav mb-0 flex list-none items-center pl-0">
          <li className="logo">
            <Link title="new-ca" href="/home">
              {variant === "primary" ? (
                <picture className="logo-white">
                  <source
                    media="(min-width:650px)"
                    srcSet="/images/graphics/logo-white752b.png"
                  />
                  <Image
                    src="/images/graphics/logo-white752b.png"
                    alt="Logo White"
                    width={148}
                    height={148}
                  />
                </picture>
              ) : (
                <picture className="logo-dark">
                  <source
                    media="(min-width:650px)"
                    srcSet="/images/graphics/logo752b.png"
                  />
                  <Image
                    src="/images/graphics/logo752b.png"
                    alt="Logo Dark"
                    width={148}
                    height={148}
                  />
                </picture>
              )}
            </Link>
            <Link href="javascript:;" className="close-menu item">
              <svg className="icon-svg">
                <use xlinkHref="/images/icons/icon.svg#close?v=20251125"></use>
              </svg>
            </Link>
          </li>

          <li>
            <Link className="link" href="/jobs">
              Tìm việc
            </Link>
          </li>
          <li>
            <Link className="link" href="company.html">
              Công ty
            </Link>
          </li>

          <li className="dropdown nav-item-group relative">
            <Link className="link" href="blog.html">
              Blog
            </Link>
            <span className="sub_menu">+</span>

            <div
              className={`nav-underline position-absolute bg-brand-accent
                start-0 bottom-0 h-[2px] w-0 transition-[width] duration-300
                ease-in-out`}
            ></div>

            <div
              className={`dropdown-menu-mega absolute left-0 mt-2 hidden
                w-[300px] group-hover:block`}
            >
              <div className="border-warning border-t-4"></div>
              <div className="card-body bg-white p-6 shadow-lg">
                <div className="row g-4 -mx-6 flex flex-wrap">
                  <div className="col-12 flex-[0_0_auto] px-6">
                    <ul className="list-unstyled mb-0 list-none pl-0">
                      <h6 className="fw-bold text-brand-primary mb-4 font-bold">
                        <Link href="blog-list/hanh-trang-nghe-tuyen-dung-lIosQRIk.html">
                          Hành trang nghề tuyển dụng
                        </Link>
                      </h6>
                      <h6 className="fw-bold text-brand-primary mb-4 font-bold">
                        <Link href="blog-list/bi-kip-nghe-nghiep-ctWNwQxk.html">
                          Bí kíp nghề nghiệp
                        </Link>
                      </h6>
                      <h6 className="fw-bold text-brand-primary mb-4 font-bold">
                        <Link href="blog-list/recruitment-land-0eqoLko6.html">
                          Recruitment Land
                        </Link>
                      </h6>
                      <h6 className="fw-bold text-brand-primary mb-4 font-bold">
                        <Link href="blog-list/thi-truong-va-xu-huong-tuyen-dung-RMisishB.html">
                          Thị trường và xu hướng tuyển dụng
                        </Link>
                      </h6>
                      <h6 className="fw-bold text-brand-primary mb-4 font-bold">
                        <Link href="blog-list/tam-su-nghe-tuyen-dung-evm3zSCU.html">
                          Tâm sự nghề tuyển dụng
                        </Link>
                      </h6>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <Link className="link" href="about-us.html">
              Giới thiệu
            </Link>
          </li>
          <li>
            <Link className="link" href="contact-us.html">
              Liên hệ
            </Link>
          </li>
          <li className="btn-mobile">
            <Link className="btn-default" href="login.html">
              Cộng tác viên
            </Link>
            <Link className="btn-default none" href="employer.html">
              Nhà tuyển dụng
            </Link>
          </li>
        </ul>
      </div>

      {/* Right menu */}
      <div className="right_menu flex items-center">
        <a className="default-lang mr-3" href="jobs-list.html">
          <img
            className="language-flag"
            src="/images/flag-en752b.svg"
            alt="EN Flag"
          />
        </a>
        {/* ✅ SỬA LỖI 3: Truyền hàm handleLoginButton thông qua prop onLoginClick */}
        <Button className="btn-default items-center" onClick={onLoginClick}>
          Đăng nhập
        </Button>
      </div>
    </div>
  );
}
