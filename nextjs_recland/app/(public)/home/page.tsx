"use client";
import Button from "@/app/components/Button";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FaWheatAwn } from "react-icons/fa6";
import { TbFlameFilled } from "react-icons/tb";
import {
  TOP_CTV,
  SECTION2_ANALYZE,
  PARTNERS_IMAGE,
  JOBS_CATEGORY,
  RECRUITER_CONTENT,
  BONUS,
} from "@/app/constants/homepage";
import map_hri from "@/public/images/graphics/map_hri.gif";
import { JobSlider, ReviewSlider } from "@/app/components/Slider";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";
import FeatureTabs, {
  HRContent,
  RecruiterContent,
} from "@/app/components/FeatureTabs";

interface TopCtvProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HomePage() {
  const [isShowTopCtv, setIsShowTopCtv] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"hr" | "employer">("hr");
  return (
    <>
      {/* Section 1 */}
      <section
        id="hero"
        className="relative top-0 left-0 z-9 h-screen bg-(image:--bg-hero) bg-fixed bg-no-repeat pt-40"
      >
        {/* Hero */}
        <h1 className="mx-4 justify-center text-5xl font-black text-gray-300">
          Nền tảng tạo ra cơ hội kiếm tiền dành cho <br />
          <span className="text-yellow-300 uppercase">HR Freelance</span>
        </h1>

        <Button
          variant="primary"
          className="text-md mx-4 mt-10 flex w-16 justify-center gap-2 py-5"
        >
          Tìm việc ngay
          <FaArrowRight />
        </Button>

        {/* Top ctv */}
        <button
          onClick={() => setIsShowTopCtv(true)}
          className="absolute bottom-0 flex h-20 w-screen items-center justify-between bg-(image:--bg-top-ctv-btn) bg-size-[100%_auto] bg-no-repeat px-10"
        >
          <h2 className="mt-4 text-2xl font-semibold text-white">
            Top cộng tác viên
          </h2>
          <FaArrowRight fill="white" size={20} className="mt-3" />
        </button>

        <TopCtv isOpen={isShowTopCtv} onClose={() => setIsShowTopCtv(false)} />
      </section>
      {/* section 2 */}
      <section className="h-fit w-screen gap-5">
        <div className="mx-6 flex flex-wrap justify-center">
          <Image
            src={map_hri}
            alt="World map"
            width={400}
            height={400}
            className="my-4 object-contain"
          />
          <h2 className="mb-5 text-3xl font-bold text-main">
            Nền tảng thương mại điện tử tuyển dụng hàng đầu Việt Nam
          </h2>
          <p className="text-md mb-4 text-gray-400">
            Recland là một đơn vị thành viên trong hệ sinh thái HRI, Recland
            cung cấp nền tảng thương mại điện tử tuyển dụng để cộng tác viên
            tuyển dụng có thể kiếm tiền bằng cách giới thiệu, kết nối các ứng
            viên ứng tuyển cho các doanh nghiệp.Cộng tác viên có thể chủ động
            làm việc, gia tăng thu nhập không giới hạn tại bất cứ đâu, bất cứ
            thời gian nào
          </p>

          <dl className="flex max-h-fit max-w-160 flex-1 grid-cols-2 flex-wrap">
            {SECTION2_ANALYZE.map((item) => {
              return (
                <div className="w-1/2 py-5" key={item.description}>
                  <dt className="text-2xl font-semibold text-[#129ab2]">
                    {item.total}+
                  </dt>
                  <dd className="w-2/3 text-wrap">{item.description}</dd>
                </div>
              );
            })}
          </dl>
        </div>
        <Button
          children={
            <>
              Khám phá <FaArrowRight />
            </>
          }
          className="mx-6 my-5 w-40"
        />
      </section>
      {/* Running banner partners*/}
      <section className="flex h-16 items-center bg-gray-300">
        <BannerLoop />
      </section>

      {/* Section4 */}
      <section className="mt-10 h-fit">
        <div className="mx-6 text-center">
          <h2 className="mb-2 text-3xl font-bold text-main">
            Cơ hội kiếm tiền không giới hạn
          </h2>
          <h3 className="text-md mb-4 leading-6 text-gray-400">
            200.000+ Job xịn – thưởng cao đến từ các doanh nghiệp lớn hàng đầu
            được cập nhật hàng ngày
          </h3>
          <div className="mb-8 flex flex-wrap justify-center gap-1">
            {JOBS_CATEGORY.map((cate) => {
              return (
                <Link
                  key={cate.id}
                  href={`#`}
                  className="h-fit w-fit rounded-2xl bg-gray-200 px-5 py-2 text-center text-sm text-nowrap text-main"
                >
                  {cate.title}
                </Link>
              );
            })}
          </div>
          <JobSlider />
          <div className="flex justify-center">
            <Button variant="outlined" className="mt-6 w-40 py-4">
              Xem tất cả
            </Button>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="my-5 h-fit w-screen px-5">
        <h2 className="text-3xl font-bold text-main">
          Vì sao lại chọn Recland?
        </h2>
        <FeatureTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="mt-10">
          {activeTab === "hr" ? <HRContent /> : <RecruiterContent />}
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/graphics/m_recland752b.png"
            alt="Recland onboard"
            width={400}
            height={400}
            className="h-fit w-120"
          ></Image>
        </div>
        <div className="flex w-full justify-center">
          <div className="flex h-200 w-90 flex-col items-center justify-center gap-8 bg-(image:--bg-home-bonus) bg-contain bg-no-repeat px-10 pt-86">
            {BONUS.map((item) => {
              return (
                <div className="flex w-full gap-4 border-b pb-3">
                  <span>
                    <Image
                      src={item.icon}
                      alt=""
                      width={60}
                      height={60}
                    ></Image>
                  </span>
                  <div className="">
                    <strong className="text-4xl font-bold text-white">
                      {item.total}
                    </strong>
                    <p className="text-md mt-2 text-blue-200">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="h-fit w-full">
          <ReviewSlider />
        </div>
      </section>
    </>
  );
}

const TopCtv = ({ isOpen, onClose }: TopCtvProps) => {
  return (
    <div
      className={`fixed top-0 right-0 h-screen w-screen bg-(image:--bg-hero) bg-cover bg-no-repeat transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"} `}
    >
      <button
        className="mt-20 block h-10 w-full bg-topbar-color px-10 text-left opacity-95"
        onClick={onClose}
      >
        <FaArrowLeft className="mr-2 mb-1 inline text-sm" />
        <p className="inline text-lg">close</p>
      </button>

      {/* Top CTV showcase */}
      <div className="mx-auto mt-8 flex h-120 w-110 flex-col items-center self-center bg-(image:--bg-top-ctv) bg-[length:28rem_30rem] bg-center bg-no-repeat">
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

const BannerLoop = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex w-max animate-marquee items-center gap-2">
        {[...PARTNERS_IMAGE, ...PARTNERS_IMAGE].map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex h-6 w-36 shrink-0 items-center justify-center"
          >
            <Image
              src={item.href}
              alt={item.alt}
              width={144}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
