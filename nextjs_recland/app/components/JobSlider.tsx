"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import JobCard from "./Card";
import { JOB_CARDS } from "../constants/homepage";

export default function JobSlider() {
  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={1.1}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
      }}
    >
      {JOB_CARDS.map((job) => (
        <SwiperSlide key={job.id}>
          <JobCard
            company={job.company}
            location={job.location}
            position={job.position}
            salary={job.salary}
            tags={job.tags}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
