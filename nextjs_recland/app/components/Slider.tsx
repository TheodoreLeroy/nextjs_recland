"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { JobCard, ReviewCard } from "./Card";
import { CTV_REVIEWS, JOB_CARDS } from "../constants/homepage";

export const JobSlider = () => {
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
};

export const ReviewSlider = () => {
  return (
    <Swiper
      spaceBetween={16}
      slidesPerView="auto"
      centeredSlides
      breakpoints={{
        640: {
          centeredSlides: false,
          slidesPerView: 2,
        },
        1024: {
          centeredSlides: false,
          slidesPerView: 3,
        },
      }}
    >
      {CTV_REVIEWS.map((ctv) => (
        <SwiperSlide key={ctv.id} className="flex w-auto! justify-center">
          <ReviewCard {...ctv} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
