"use client";
import Container from "@/components/common/Container";
import MapHRI from "@/public/map_hri.gif";
import Image from "next/image";
import CountUp from "react-countup";
import { IMGURL, CONTENT, HEADER, STATISTIC } from "@/constants/about";
import Button from "@/components/ui/Button";
export default function AboutSection() {
  return (
    <section className="relative min-h-screen">
      <Container>
        <div className="flex min-h-screen flex-col justify-start lg:grid lg:grid-cols-2 lg:items-center">
          {/* Left image */}
          <Image
            src={IMGURL}
            alt=""
            width={400}
            height={400}
            className="w-full self-start"
          />
          {/* Right content */}
          <div className="self-start">
            <h2 className="mb-5 text-3xl font-bold text-main lg:text-4xl">
              {HEADER}
            </h2>
            <p className="text-md mb-4 text-gray-400 lg:text-xl">{CONTENT}</p>
            <div className="grid grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
              {STATISTIC.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="pb-5 text-2xl font-bold text-sky-500 lg:w-32 lg:pb-0 lg:text-3xl"
                  >
                    <CountUp
                      start={0}
                      end={item.total}
                      duration={3}
                      separator="."
                      className="font-bold text-sky-500"
                    />
                    +
                    <br />
                    <span className="text-sm font-normal text-gray-400 lg:text-lg">
                      {item.description}
                    </span>
                  </div>
                );
              })}
            </div>
            <Button>
              Khám phá
              <svg className="h-3 w-6 fill-current">
                <use xlinkHref="/icon.svg#right"></use>
              </svg>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
