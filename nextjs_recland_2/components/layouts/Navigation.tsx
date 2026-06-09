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
import React from "react";
import { usePathname } from "next/navigation";
interface Props {
  className?: string;
}

export default function Navigation({ className }: Props) {
  const { isScroll } = useUIStore();
  const pathname = usePathname();
  const isHomePage = pathname === "/home";
  const isLoginPage = pathname === "/login";
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      useUIStore.setState({ isScroll: scrollTop > 0 });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="navbar" className="topnav home">
      <div className="container">
        <div className="flex_row flex">
          <div className="left_menu">
            <Link className="logo-mobile" title="new-ca" href="#">
              <Image
                className="logo-dark h-full"
                src="/images/graphics/logo752b.png"
                alt=""
                width={146}
                height={146}
              />
              <Image
                className="logo-white h-full"
                src="/images/graphics/logo-white752b.png"
                alt=""
                width={146}
                height={146}
              />
            </Link>
            <Link href="javascript:;" className="vibeji-ham">
              <svg className="icon-svg">
                <use xlinkHref="/images/icons/icon.svg#menu" />
              </svg>
            </Link>
            <div className="flex_right flex">
              <div className="main-menu">
                <ul className="nav">
                  <li className="logo">
                    <Link title="new-ca" href="index.html">
                      <picture className="logo-dark">
                        <source
                          media="(min-width:650px)"
                          srcSet="/images/graphics/logo752b.png"
                        />
                        <Image
                          src="/images/graphics/logo752b.png"
                          alt=""
                          width={48}
                          height={48}
                        />
                      </picture>
                      <picture className="logo-white">
                        <source
                          media="(min-width:650px)"
                          srcSet="assets/images/graphics/logo-white752b.png"
                        />
                        <Image
                          src="/images/graphics/logo-white752b.png"
                          alt=""
                          width={48}
                          height={48}
                        />
                      </picture>
                    </Link>
                    <a href="javascript:;" className="close-menu item">
                      <svg className="icon-svg">
                        <use xlinkHref="/images/icons/icon.svg#close?v=20251125"></use>
                      </svg>
                    </a>
                  </li>

                  <li className="">
                    <a className="link" href="jobs-list.html">
                      Tìm việc
                    </a>
                  </li>

                  <li className="">
                    <a className="link" href="company.html">
                      Công ty
                    </a>
                  </li>

                  <li className="dropdown nav-item-group">
                    <a className="link" href="blog.html">
                      Blog
                    </a>
                    <span className="sub_menu">+</span>

                    {/* Đã sửa style line chỉ báo */}
                    <div
                      className={`nav-underline position-absolute
                        bg-brand-accent start-0 bottom-0 h-[2px] w-0
                        transition-[width] duration-300 ease-in-out`}
                    ></div>

                    {/* Đã sửa style width 300px */}
                    <div className="dropdown-menu-mega mt-2 w-[300px]">
                      {/* Đã sửa border-top màu warning */}
                      <div className="border-warning border-t-4"></div>

                      {/* Đã sửa padding 1.5rem (p-6) */}
                      <div className="card-body p-6">
                        {/* Đã sửa row flex-wrap và âm margin (mx-[-1.5rem] bằng -mx-6) */}
                        <div className="row g-4 -mx-6 flex flex-wrap">
                          {/* Đã sửa col-12 flex và padding (px-6) */}
                          <div className="col-12 flex-[0_0_auto] px-6">
                            {/* Đã sửa list-unstyled */}
                            <ul className="list-unstyled mb-0 list-none pl-0">
                              {/* Đã sửa các h6 tiêu đề bài viết (font-bold và mb-4 tương đương 1rem) */}
                              <h6
                                className={`fw-bold text-brand-primary mb-4
                                  font-bold`}
                              >
                                <a href="blog-list/hanh-trang-nghe-tuyen-dung-lIosQRIk.html">
                                  Hành trang nghề tuyển dụng
                                </a>
                              </h6>
                              <h6
                                className={`fw-bold text-brand-primary mb-4
                                  font-bold`}
                              >
                                <a href="blog-list/bi-kip-nghe-nghiep-ctWNwQxk.html">
                                  Bí kíp nghề nghiệp
                                </a>
                              </h6>
                              <h6
                                className={`fw-bold text-brand-primary mb-4
                                  font-bold`}
                              >
                                <a href="blog-list/recruitment-land-0eqoLko6.html">
                                  Recruitment Land
                                </a>
                              </h6>
                              <h6
                                className={`fw-bold text-brand-primary mb-4
                                  font-bold`}
                              >
                                <a href="blog-list/thi-truong-va-xu-huong-tuyen-dung-RMisishB.html">
                                  Thị trường và xu hướng tuyển dụng
                                </a>
                              </h6>
                              <h6
                                className={`fw-bold text-brand-primary mb-4
                                  font-bold`}
                              >
                                <a href="blog-list/tam-su-nghe-tuyen-dung-evm3zSCU.html">
                                  Tâm sự nghề tuyển dụng
                                </a>
                              </h6>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="">
                    <a className="link" href="about-us.html">
                      Giới thiệu
                    </a>
                  </li>
                  <li className="">
                    <a className="link" href="contact-us.html">
                      Liên hệ
                    </a>
                  </li>
                  <li className="btn-mobile">
                    <a className="btn-default" href="login.html">
                      Cộng tác viên
                    </a>
                    <a className="btn-default none" href="employer.html">
                      Nhà tuyển dụng
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right_menu">
            <Link className="default-lang mr-3" href="#">
              <img className="language-flag" src={EN_FLAG} alt="Flag" />
            </Link>
            <a className="btn-default" href="login.html">
              Cộng tác viên
            </a>
            <a className="btn-default none" href="employer.html">
              Nhà tuyển dụng
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
