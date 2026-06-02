"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { IoLocationOutline } from "react-icons/io5";

interface JobCardProps {
  image: string;
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

interface CardProps {
  children: React.ReactNode;
  className?: string;
}
export const Card = ({ children, className }: CardProps) => {
  const baseStyles = `
    min-w-120
    min-h-140
  `;
  return <div className={twMerge(baseStyles, className)}>{children}</div>;
};

export const JobCard = ({
  image,
  company,
  location,
  position,
  salary,
  tags,
  className,
}: JobCardProps) => {
  const baseStyles = `
        w-full
        h-fit
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
            <Image src={image} alt={company} width={50} height={50} />
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
  const baseStyles = `
        w-full
        h-fit
        overflow-hidden
        rounded-[18px]
        border-2
        border-sky-500
        transition-all
        duration-300
        hover:scale-[1.02]
    `;

  return (
    <div className={twMerge(baseStyles, className)}>
      <div className="flex min-h-64 flex-col gap-4 rounded-br-[50px] bg-white p-5 sm:justify-between">
        <div className="flex gap-3 border-t border-b border-gray-100 border-b-sky-200 pt-4 pb-2">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-gray-200">
            <Image
              src={avatar}
              alt={author}
              width={56}
              height={56}
              className="h-full w-full object-cover"
            />
          </div>
          <div className=""></div>
          <div className="flex flex-col justify-center text-start">
            <h4 className="line-clamp-1 text-base font-bold text-[#1C6980]">
              {author}
            </h4>
            <p className="mt-0.5 text-sm font-medium text-gray-400">{role}</p>
          </div>
        </div>
        <p className="line-clamp-5 overflow-scroll overflow-x-hidden overflow-y-auto text-start text-base leading-relaxed text-gray-600 italic">
          "{review}"
        </p>
      </div>
    </div>
  );
};
