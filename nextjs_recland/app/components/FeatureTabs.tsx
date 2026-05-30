"use client";

import { useState } from "react";
import { HR_CONTENT, RECRUITER_CONTENT } from "@/app/constants/homepage";
import { FaGlobeAmericas } from "react-icons/fa";
import Image from "next/image";
interface FeatureTabsProps {
  activeTab: "hr" | "employer";
  setActiveTab: React.Dispatch<React.SetStateAction<"hr" | "employer">>;
}

export default function FeatureTabs({
  activeTab,
  setActiveTab,
}: FeatureTabsProps) {
  return (
    <div className="w-full max-w-md">
      <div className="relative flex h-14 rounded-2xl border-2 border-gray-300 bg-gray-100 p-1">
        {/* Slider */}
        <div
          className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-xl bg-orange-400 transition-all duration-400 ease-in-out ${
            activeTab === "hr" ? "left-1" : "left-[calc(50%+2px)]"
          } `}
        />

        {/* HR */}
        <button
          onClick={() => setActiveTab("hr")}
          className={`relative z-10 flex-1 font-bold transition-colors ${
            activeTab === "hr" ? "text-sky-700" : "text-gray-400"
          } `}
        >
          Đối với HR
        </button>

        {/* Employer */}
        <button
          onClick={() => setActiveTab("employer")}
          className={`relative z-10 flex-1 font-bold transition-colors ${
            activeTab === "employer" ? "text-sky-700" : "text-gray-400"
          } `}
        >
          Đối với Nhà tuyển dụng
        </button>
      </div>
    </div>
  );
}

export const HRContent = () => {
  return (
    <div className="flex flex-col gap-12">
      {HR_CONTENT.map((item) => {
        const Icon = item.icon;

        return (
          <div key={item.id} className="flex items-start gap-6">
            <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-cyan-100">
              <svg className="size-8 fill-current text-cyan-600">
                <use xlinkHref={item.icon} />
              </svg>
            </div>

            <div>
              <h3 className="text-2xl leading-tight font-bold text-cyan-700">
                {item.title}
              </h3>

              <p className="mt-2 max-w-xl text-lg leading-relaxed text-gray-500">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const RecruiterContent = () => {
  return (
    <div className="flex flex-col gap-12">
      {RECRUITER_CONTENT.map((item) => {
        const Icon = item.icon;

        return (
          <div key={item.id} className="flex items-start gap-6">
            <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-cyan-100">
              <svg className="size-8 fill-current text-cyan-600">
                <use xlinkHref={item.icon} />
              </svg>
            </div>

            <div>
              <h3 className="text-2xl leading-tight font-bold text-cyan-700">
                {item.title}
              </h3>

              <p className="mt-2 max-w-xl text-lg leading-relaxed text-gray-500">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
