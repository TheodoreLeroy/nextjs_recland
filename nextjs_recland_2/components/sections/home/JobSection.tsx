"use client";

import Container from "@/components/common/Container";
import { JobCard } from "@/components/ui/Card";
import { JOBS_CATEGORY, JOB_CARDS } from "@/constants/job";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import Button from "@/components/ui/Button";

export default function JobSection() {
  return (
    <section className="relative min-h-screen">
      <Container>
        <div className="mt-20 flex flex-col gap-6 text-center text-3xl lg:text-6xl">
          <h2 className="mb-2 font-bold text-main">
            Cơ hội kiếm tiền không giới hạn
          </h2>
          <h3 className="mb-4 text-sm leading-6 text-gray-400 lg:text-lg">
            200.000+ Job xịn – thưởng cao đến từ các doanh nghiệp lớn hàng đầu
            được cập nhật hàng ngày
          </h3>
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {JOBS_CATEGORY.map((cate) => {
              return (
                <Link
                  key={cate.id}
                  href={`#`}
                  className="h-fit w-fit rounded-2xl bg-gray-200 px-3 py-1 text-center text-sm text-nowrap text-main lg:px-5"
                >
                  {cate.title}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Job silder */}
        <div className="">
          <Swiper
            spaceBetween={16}
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
              1024: {
                slidesPerView: 4,
                grid: {
                  rows: 2,
                  fill: "row",
                },
              },
            }}
          >
            {JOB_CARDS.map((job) => (
              <SwiperSlide key={job.id}>
                <JobCard
                  image={job.image}
                  company={job.company}
                  location={job.location}
                  position={job.position}
                  salary={job.salary}
                  tags={job.tags}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-center">
            <Button variant="outlined" className="mt-10">
              Xem tất cả
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
