"use client";
import Container from "@/components/common/Container";
import FeatureTabs from "@/components/ui/FeatureTab";
import { HR_CONTENT, RECRUITER_CONTENT } from "@/constants/feature";
import { useState } from "react";
import Image from "next/image";

export default function FeatureSection() {
  const [activeTab, setActiveTab] = useState<"hr" | "employer">("hr");
  return (
    <section className="relative min-h-screen">
      <Container>
        <div className="mt-10 flex min-h-screen flex-col justify-start lg:grid lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col">
            <h2 className="mb-10 text-center text-3xl font-bold text-main">
              Vì sao lại chọn Recland?
            </h2>
            <div>
              <FeatureTabs activeTab={activeTab} setActiveTab={setActiveTab} />
              {activeTab === "hr" ? <HRContent /> : <RecruiterContent />}
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <Image
              src="/recland752b.png"
              alt="Recland onboard"
              width={400}
              height={400}
              className="h-fit w-120"
            ></Image>
          </div>
        </div>
      </Container>
    </section>
  );
}

const HRContent = () => {
  return (
    <div className="mt-10 flex flex-col gap-6">
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
              <h3 className="text-xl leading-tight font-bold text-cyan-700">
                {item.title}
              </h3>

              <p className="text-md mt-2 max-w-xl leading-relaxed text-gray-500">
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
    <div className="mt-10 flex flex-col gap-6">
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
              <h3 className="text-xl leading-tight font-bold text-cyan-700">
                {item.title}
              </h3>

              <p className="text-md mt-2 max-w-xl leading-relaxed text-gray-500">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
