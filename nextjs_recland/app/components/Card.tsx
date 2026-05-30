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

export default function JobCard({
  company,
  location,
  position,
  salary,
  tags,
  className,
}: JobCardProps) {
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

            <p className="flex mt-1 text-sm text-gray-400">
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
}
