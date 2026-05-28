"use client";
import Button from "@/app/components/Button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FaWheatAwn } from "react-icons/fa6";
import { TOP_CTV } from "@/app/constants/navigation";
interface TopCtvProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HomePage() {
  const [isShowTopCtv, setIsShowTopCtv] = useState<boolean>(false);

  return (
    <>
      <section
        id="hero"
        className="relative top-0 left-0 z-9 flex h-screen flex-col bg-(image:--bg-hero) bg-cover bg-no-repeat pt-40"
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
      <div className="absolute top-30 flex h-[82%] w-full flex-col items-center">
        <div className="inline-flex h-144 w-full flex-col items-center bg-(image:--bg-top-ctv) bg-size-[100%_36rem] bg-no-repeat pt-8">
          <header className="flex gap-2 text-xl font-semibold text-white">
            <FaWheatAwn fill="#33DAFF" className="rotate-y-179" />
            <span>Top cộng tác viên</span>
            <FaWheatAwn fill="#33DAFF" />
          </header>
          <table className="w-60 text-white">
            <ol type="1" className="gap-5 flex flex-col">
              {TOP_CTV.map((ctv, index) => {
                return (
                  <li
                    key={ctv.id}
                    className="flex justify-between items-center h-12 w-100% rounded-sm border-x border-gray-200 bg-(image:--gradient-ctv-card)"
                  >
                    <div className="">
                      <span>{index + 1}</span>
                      {ctv.name}
                    </div>
                    {ctv.salary}
                  </li>
                );
              })}
            </ol>
          </table>
        </div>
      </div>
    </div>
  );
};
