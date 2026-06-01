"use client";
import Container from "@/components/common/Container";
import Button from "@/components/ui/Button";
import { TOP_CTV } from "@/constants/hero";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaWheatAwn } from "react-icons/fa6";
import { TbFlameFilled } from "react-icons/tb";

export default function HeroSection() {
  const [isShowTopCtv, setIsShowTopCtv] = useState<boolean>(false);
  return (
    <section className="relative min-h-screen bg-(image:--bg-hero) bg-cover bg-center bg-no-repeat md:bg-position-[100%_122%]">
      <Container>
        <div className="flex min-h-screen flex-col justify-center lg:grid lg:grid-cols-2 lg:items-center">
          {/* Left hero title */}
          <div className="flex h-full w-full flex-col justify-center gap-10">
            <h1 className="text-5xl font-bold text-[#C4EAF4] lg:text-6xl">
              Nền tảng tạo ra cơ hội kiếm tiền dành cho <br />
              <span className="text-yellow-300 uppercase">HR Freelance</span>
            </h1>
            <Button className="flex gap-2">
              Tìm việc ngay
              <svg className="h-6 w-5 fill-current">
                <use xlinkHref="/icon.svg#right"></use>
              </svg>
            </Button>
            {/* Notify desktop */}
            <div className="mt-40 hidden h-16 w-fit items-center rounded-2xl bg-cyan-100/60 px-5 text-gray-700 lg:flex">
              <svg className="icon-svg me-2 w-8 fill-current">
                <use xlinkHref="/icon.svg#web"></use>
              </svg>
              <span className="w-26 text-sm font-semibold"> MỚI NHẤT</span>
              <Link href="/blog" target="_blank" className="text-sm">
                Trong thời đại số, việc tìm việc hay tuyển dụng không còn chỉ
                phụ thuộc vào mạng lưới cá nhân...
              </Link>
            </div>
          </div>
          {/* Right illustration */}
          {/* Mobile */}
          <button
            onClick={() => setIsShowTopCtv(true)}
            className="absolute bottom-0 left-0 flex h-20 w-full items-center justify-between bg-(image:--m-bg-top-ctv-btn) bg-cover bg-no-repeat px-10 lg:hidden"
          >
            <h2 className="mt-4 text-2xl font-semibold text-white">
              Top cộng tác viên
            </h2>
            <FaArrowRight fill="white" size={20} className="mt-3" />
          </button>

          {/* Mobile */}
          <TopCtv
            isOpen={isShowTopCtv}
            onClose={() => setIsShowTopCtv(false)}
          />

          {/* Desktop */}
          <div className="relative mx-auto hidden aspect-square w-full max-w-135 flex-col items-center justify-center lg:flex">
            <Image
              src="/desktop/bg-ctv.png"
              alt="Background CTV"
              fill
              sizes="(max-w-7xl) 50vw, 33vw"
              priority
              className="pointer-events-none absolute inset-0 z-0 object-contain"
            />

            <div className="absolute inset-0 left-[9.5%] z-10 flex w-[81%] flex-col px-[6%] pt-[15%] pb-[20%] text-sm xl:text-base">
              <header className="flex justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="20"
                  viewBox="0 0 35 20"
                  fill="currentColor"
                  className="text-cyan-300"
                >
                  <div
                    style={{ mixBlendMode: "overlay" }}
                    clip-path="url(#clip0_1_1631)"
                  >
                    <path
                      d="M11.0076 10.4702C12.9436 11.2288 14.9191 11.9004 16.9341 12.4615C16.6734 12.4852 16.4047 12.5247 16.136 12.5721C13.884 12.9751 11.9638 14.1604 10.5967 15.7882C12.4458 16.8471 14.6583 17.2817 16.9104 16.8708C19.1388 16.4757 21.0353 15.3141 22.3944 13.7179C24.4806 14.0972 26.6141 14.3659 28.7713 14.5318C28.3525 14.6108 27.9337 14.7136 27.5228 14.8479C25.0969 15.646 23.1609 17.2422 21.9124 19.2493C24.1092 20.1264 26.6141 20.2687 29.04 19.4785C30.249 19.0834 31.3395 18.4828 32.2798 17.7321C32.754 17.3528 33.1965 16.934 33.5916 16.4836C34.0262 15.9937 34.4687 15.4326 34.6346 14.7689C34.8164 14.0577 34.7611 13.2438 34.6663 12.5247C34.4687 10.968 33.8919 9.44291 33.0384 8.13117C31.6477 5.98973 29.609 4.52785 27.349 3.83248C27.0645 6.17938 27.5702 8.6369 28.9531 10.7783C29.7986 12.0743 30.8812 13.1173 32.106 13.8996C28.8741 13.8285 25.6975 13.5124 22.6078 12.9514C22.9476 11.0944 22.7421 9.11893 21.8808 7.27776C20.9088 5.19953 19.2731 3.64283 17.3529 2.742C16.8077 4.79652 16.9499 7.0486 17.9219 9.12683C18.5777 10.5334 19.5418 11.695 20.6876 12.58C17.4557 11.8846 14.3186 10.9285 11.2921 9.73528C11.8136 8.17859 11.9005 6.46385 11.4343 4.76491C10.8812 2.7499 9.65637 1.10628 8.06807 0C7.26206 1.76215 7.04081 3.80877 7.59395 5.82378C7.90213 6.94587 8.42366 7.95733 9.10323 8.81865C8.29723 8.46306 7.49912 8.08376 6.70892 7.68866C5.91872 7.29356 5.14432 6.88266 4.37783 6.45595C4.06175 6.2821 3.75356 6.10036 3.43748 5.92651C3.18462 5.77637 2.93176 5.59463 2.65519 5.484C2.37862 5.37337 2.02303 5.28645 1.75436 5.44449C1.36716 5.67365 2.18896 6.13987 2.36281 6.24259C2.62358 6.39273 2.88435 6.54287 3.13721 6.69301C3.52441 6.91426 3.91161 7.13552 4.29881 7.34887C5.0811 7.77558 5.87131 8.18649 6.66941 8.58159C6.81955 8.65271 6.96969 8.72382 7.11192 8.79494C6.58249 8.69222 6.02935 8.6369 5.4604 8.6448C3.37427 8.66061 1.46988 9.4271 0.000110626 10.6835C1.49359 11.9162 3.41378 12.6511 5.49991 12.6274C7.58604 12.6116 9.49043 11.8451 10.9681 10.5887C10.9839 10.5492 10.9918 10.5176 11.0076 10.4781V10.4702Z"
                      fill="currentColor"
                    />
                  </div>
                  <defs>
                    <clipPath id="clip0_1_1631">
                      <rect
                        width="34.7531"
                        height="20"
                        fill="white"
                        transform="matrix(-1 0 0 1 34.7532 0)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <h2 className="mb-5 text-center text-2xl font-bold text-white">
                  Top cộng tác viên
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="20"
                  viewBox="0 0 35 20"
                  fill="none"
                  className="text-cyan-300"
                >
                  <g
                    style={{ mixBlendMode: "overlay" }}
                    clip-path="url(#clip0_1_1628)"
                  >
                    <path
                      d="M23.7455 10.4702C21.8095 11.2288 19.834 11.9004 17.819 12.4615C18.0798 12.4852 18.3485 12.5247 18.6171 12.5721C20.8692 12.9751 22.7894 14.1604 24.1564 15.7882C22.3074 16.8471 20.0948 17.2817 17.8427 16.8708C15.6144 16.4757 13.7179 15.3141 12.3587 13.7179C10.2726 14.0972 8.13906 14.3659 5.98181 14.5318C6.40062 14.6108 6.81943 14.7136 7.23033 14.8479C9.65625 15.646 11.5922 17.2422 12.8408 19.2493C10.644 20.1264 8.13906 20.2687 5.71314 19.4785C4.50414 19.0834 3.41366 18.4828 2.47332 17.7321C1.9992 17.3528 1.55668 16.934 1.16158 16.4836C0.726972 15.9937 0.284459 15.4326 0.118516 14.7689C-0.06323 14.0577 -0.00791586 13.2438 0.0869083 12.5247C0.284459 10.968 0.861306 9.44291 1.71472 8.13117C3.10548 5.98973 5.1442 4.52785 7.40417 3.83248C7.68865 6.17938 7.18292 8.6369 5.80007 10.7783C4.95455 12.0743 3.87197 13.1173 2.64716 13.8996C5.87909 13.8285 9.0557 13.5124 12.1454 12.9514C11.8056 11.0944 12.011 9.11893 12.8724 7.27776C13.8443 5.19953 15.48 3.64283 17.4002 2.742C17.9455 4.79652 17.8032 7.0486 16.8313 9.12683C16.1754 10.5334 15.2114 11.695 14.0656 12.58C17.2975 11.8846 20.4346 10.9285 23.4611 9.73528C22.9395 8.17859 22.8526 6.46385 23.3188 4.76491C23.872 2.7499 25.0968 1.10628 26.6851 0C27.4911 1.76215 27.7124 3.80877 27.1592 5.82378C26.851 6.94587 26.3295 7.95733 25.6499 8.81865C26.4559 8.46306 27.254 8.08376 28.0442 7.68866C28.8344 7.29356 29.6088 6.88266 30.3753 6.45595C30.6914 6.2821 30.9996 6.10036 31.3157 5.92651C31.5685 5.77637 31.8214 5.59463 32.098 5.484C32.3745 5.37337 32.7301 5.28645 32.9988 5.44449C33.386 5.67365 32.5642 6.13987 32.3903 6.24259C32.1296 6.39273 31.8688 6.54287 31.6159 6.69301C31.2287 6.91426 30.8416 7.13552 30.4544 7.34887C29.6721 7.77558 28.8819 8.18649 28.0837 8.58159C27.9336 8.65271 27.7835 8.72382 27.6412 8.79494C28.1707 8.69222 28.7238 8.6369 29.2928 8.6448C31.3789 8.66061 33.2833 9.4271 34.753 10.6835C33.2596 11.9162 31.3394 12.6511 29.2532 12.6274C27.1671 12.6116 25.2627 11.8451 23.7851 10.5887C23.7692 10.5492 23.7613 10.5176 23.7455 10.4781V10.4702Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1628">
                      <rect width="34.7531" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </header>
              <div className="flex-1 overflow-y-auto">
                <ol type="1" className="flex flex-col gap-3 text-white">
                  {TOP_CTV.map((ctv, index) => {
                    return (
                      <li
                        key={ctv.id}
                        className="flex h-12 w-full items-center justify-between rounded-sm border-x border-gray-200 bg-(image:--gradient-ctv-card) px-3 font-bold xl:h-12 xl:px-4"
                      >
                        <div className="flex w-fit items-center gap-2">
                          <span className="opacity-80">{index + 1}</span>
                          <span className="max-w-25 truncate xl:max-w-35">
                            {ctv.name}
                          </span>{" "}
                          🔥
                        </div>
                        <div className="flex items-center gap-2">
                          &#36; {ctv.salary}{" "}
                          <div className="flex items-center justify-center gap-1 rounded-2xl bg-yellow-300 px-3 py-0.5 text-xs font-normal text-black xl:px-5 xl:text-sm">
                            <svg
                              width="12"
                              height="13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 14 15"
                              className="shrink-0"
                            >
                              <path
                                d="M11.667 5.995V7.5h1.166V4h-3.5v1.167h1.505L8.237 7.768a.58.58 0 0 1-.823 0l-.682-.682a1.75 1.75 0 0 0-2.474 0l-3.091 3.091.822.823 3.086-3.086a.58.58 0 0 1 .822 0l.683.683a1.75 1.75 0 0 0 2.473 0l2.614-2.602Z"
                                fill="currentColor"
                              />
                            </svg>
                            <span>+{ctv.grow}%</span>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

interface TopCtvProps {
  isOpen: boolean;
  onClose: () => void;
}

const TopCtv = ({ isOpen, onClose }: TopCtvProps) => {
  return (
    <div
      className={`fixed top-0 right-0 h-screen w-screen bg-(image:--bg-hero) bg-cover bg-no-repeat transition-transform duration-500 ease-in-out lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"} `}
    >
      <button
        className="mt-20 block h-10 w-full bg-topbar-color px-10 text-left text-white opacity-95"
        onClick={onClose}
      >
        <FaArrowLeft className="mr-2 mb-1 inline text-sm" />
        <p className="inline text-lg">close</p>
      </button>

      {/* Top CTV showcase */}
      <div className="mx-auto mt-8 flex h-120 w-110 flex-col items-center self-center bg-(image:--m-bg-top-ctv) bg-size-[28rem_30rem] bg-center bg-no-repeat">
        <header className="mt-7 flex gap-2 text-xl font-semibold text-white">
          <FaWheatAwn fill="#33DAFF" className="rotate-y-179" />
          <span>Top cộng tác viên</span>
          <FaWheatAwn fill="#33DAFF" />
        </header>
        <div className="mt-5 w-72 font-bold text-white">
          <ol type="1" className="flex flex-col gap-5">
            {TOP_CTV.map((ctv, index) => {
              return (
                <li
                  key={ctv.id}
                  className="w-100% flex h-12 items-center justify-between rounded-sm border-x border-gray-200 bg-(image:--gradient-ctv-card) px-4"
                >
                  <div className="flex w-fit gap-2">
                    <span>{index + 1}</span>
                    {ctv.name}
                    <svg width="26" height="26" viewBox="0 0 24 24">
                      <defs>
                        <linearGradient
                          id="flameGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop offset="0%" stopColor="#fde68a" />
                          <stop offset="50%" stopColor="#f97316" />
                          <stop offset="100%" stopColor="#dc2626" />
                        </linearGradient>
                      </defs>

                      <TbFlameFilled fill="url(#flameGradient)" />
                    </svg>
                  </div>
                  <span>&#36; {ctv.salary}</span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};
