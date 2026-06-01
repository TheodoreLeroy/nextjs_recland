"use client";
import Container from "@/components/common/Container";
import { ReviewCard } from "@/components/ui/Card";
import { CTV_REVIEWS } from "@/constants/review";
import Link from "next/link";
import { Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ReviewSection() {
  return (
    <section className="relative min-h-fit pb-20">
      <Container>
        <div className="mt-20 mb-10 flex flex-col gap-6 text-center text-3xl lg:text-6xl">
          <h2 className=" font-bold text-main">
            Phản hồi từ cộng tác viên tuyển dụng
          </h2>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            modules={[Grid]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                grid: {
                  rows: 2,
                  fill: "row",
                },
              },
            }}
          >
            <div className="mb-8 flex flex-wrap justify-center gap-2">
              {CTV_REVIEWS.map((item) => (
                <SwiperSlide key={item.id}>
                  <ReviewCard
                    avatar={item.avatar}
                    author={item.author}
                    role={item.role}
                    review={item.review}
                  />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
        <div className="hidden justify-evenly md:flex gap-10">
          {CTV_REVIEWS.map((item) => (
            <ReviewCard
              key={item.id}
              avatar={item.avatar}
              author={item.author}
              role={item.role}
              review={item.review}
              className="md:min-h-70 md:w-fit"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
