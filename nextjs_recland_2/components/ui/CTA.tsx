import Link from "next/link";
import React from "react";

interface CTAProps {
  children: React.ReactNode;
}

export default function CTA({ children }: CTAProps) {
  return (
    <div
      className={`flex w-full max-w-[320px] flex-col gap-3 sm:gap-4 md:flex-row
        md:flex-wrap md:justify-center lg:justify-center`}
    >
      <Link
        href="#"
        className={`group inline-flex w-full cursor-pointer items-center
          justify-center gap-2.5 rounded-xl border-none
          bg-[linear-gradient(90deg,#f9ac4e_0%,#fad50b_100%)] px-8 py-3.75
          text-[1.125rem] font-bold text-[#17677b]!
          [box-shadow:0_4px_15px_rgba(249,172,78,0.35)] transition-all
          duration-[0.25s] ease-in-out hover:-translate-y-0.5 hover:transform
          hover:bg-[linear-gradient(135deg,#fbad5c_0%,#ff9d4f_100%)]
          hover:[box-shadow:0_6px_20px_rgba(249,172,78,0.45)]`}
      >
        {children}
        <i
          className={` inline-flex h-5.5 w-5.5 items-center justify-center
            rounded-[5px] border-[1.5px] border-solid border-current
            [transition:all_0.25s_cubic-bezier(0.4,0,0.2,1)]
            group-hover:translate-x-1.25 group-hover:bg-[rbga(23,103,123,0.1)]`}
        >
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 5.5H9.5M9.5 5.5L6.5 2.5M9.5 5.5L6.5 8.5"
              stroke="currentColor"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </i>
      </Link>
    </div>
  );
}
