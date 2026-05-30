"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { IoLocationOutline } from "react-icons/io5";

interface JobCardProps {
  company: string;
  location: string;
  position: string;
  salary: string;
  tags: string[];
  className?: string;
}

interface ReviewCardProps {
  avatar: string;
  author: string;
  role: string;
  review: string;
  className?: string;
}

export const JobCard = ({
  company,
  location,
  position,
  salary,
  tags,
  className,
}: JobCardProps) => {
  const baseStyles = `
        w-full
        h-96
        overflow-hidden
        rounded-[18px]
        border-2
        border-sky-500
        bg-(image:--gradient-job-card)
        transition-all
        duration-300
        hover:scale-[1.02]
    `;

  return (
    <div className={twMerge(baseStyles, className)}>
      {/* White content */}
      <div className="min-h-64 rounded-br-[50px] bg-white p-5">
        {/* Company */}
        <div className="flex gap-3">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl">
            <Image
              src="/images/other/avatar_1752b.jpg"
              alt={company}
              width={50}
              height={50}
            />
          </div>

          <div>
            <h4 className="line-clamp-2 text-start text-base font-bold text-[#1C6980]">
              {company}
            </h4>

            <p className="mt-1 flex text-sm text-gray-400">
              <IoLocationOutline /> {location}
            </p>
          </div>
        </div>

        {/* Position */}
        <h2 className="mt-8 text-start text-2xl font-extrabold text-[#1C6980] uppercase">
          {position}
        </h2>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bonus */}
      <div className="items-cente flex px-5 py-6">
        <h3 className="text-2xl font-bold text-white">Bonus: {salary} VND</h3>
      </div>
    </div>
  );
};

export const ReviewCard = ({
  avatar,
  author,
  role,
  review,
  className,
}: ReviewCardProps) => {
  const baseStye = `h-90 w-70 rounded-2xl border-2 border-blue-400 p-6`;
  return (
    <div className={twMerge(baseStye, className)}>
      <div className="flex items-center w-full border-b border-b-sky-300 gap-6 pb-6">
        <Image
          src={avatar}
          alt=""
          width={80}
          height={80}
          className="rounded-full"
        />
        <div>
          <h5 className="text-xl font-bold text-main ">{author}</h5>
          <h6 className="text-lg">{role}</h6>
        </div>
      </div>
      <p className="text-lg leading-8 mt-4">{review}</p>
    </div>
  );
};
