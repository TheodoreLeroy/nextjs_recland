"use client";
import Container from "@/components/common/Container";
import { BONUS } from "@/constants/bonus";
import Image from "next/image";
import MoblieBonus from "@/public/mobile/m_bg-bonus.png";
import DesktopBonus from "@/public/desktop/bg-bonus.png";

export default function BonusSection() {
  return (
    <section className="relative flex min-h-fit items-center justify-center py-10">
      <Container>
        {/* ================= MOBILE VIEW ================= */}
        <div className="relative mx-auto h-200 w-90 md:hidden">
          <Image
            src={MoblieBonus}
            alt="Bonus Background Mobile"
            width={600}
            height={620}
            priority
            className="pointer-events-none h-full w-full object-contain"
          />
          <div className="absolute inset-0 z-10 flex flex-col justify-start gap-6 px-12 pt-110">
            {BONUS.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 border-b border-white/10 pb-4 last:border-0"
                >
                  <div className="shrink-0">
                    <Image
                      src={item.icon}
                      alt=""
                      width={48}
                      height={48}
                      className="h-12 w-12 object-contain"
                    />
                  </div>

                  <div className="flex flex-col text-start">
                    <strong className="text-3xl leading-none font-extrabold tracking-tight text-white">
                      {item.total}
                    </strong>
                    <p className="mt-1 text-sm font-medium text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= DESKTOP VIEW ================= */}
        <div className="relative mx-auto hidden h-120 w-full max-w-300 md:block">
          <Image
            src={DesktopBonus}
            alt="Bonus Background Desktop"
            width={800}
            height={200}
            priority
            className="pointer-events-none h-full w-full object-contain"
          />

          <div className="absolute inset-0 z-10 mt-16 ml-80 flex items-center gap-10 lg:ml-100 lg:gap-20 lg:pr-5">
            <div className="col-span-5" />

            <div className="col-span-7 flex w-full justify-between">
              {BONUS.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-1 flex-col items-center gap-3 border-r border-white/20 text-center last:border-0"
                  >
                    <div className="shrink-0">
                      <Image
                        src={item.icon}
                        alt=""
                        width={56}
                        height={56}
                        className="h-12 w-12 object-contain lg:h-20 lg:w-20"
                      />
                    </div>

                    <div className="flex flex-col items-center">
                      <strong className="text-3xl leading-none font-extrabold tracking-tight text-white lg:text-5xl">
                        {item.total}
                      </strong>
                      <p className="mt-2 max-w-37.5 text-sm font-medium whitespace-pre-line text-blue-200/80 lg:text-xl">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
