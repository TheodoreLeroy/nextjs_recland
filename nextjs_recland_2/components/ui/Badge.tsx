import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  const baseStyle = twMerge(
    `mb-6 inline-flex items-center gap-2 rounded-full border border-solid border-[#19c9e84d] bg-[#c2eaf426] px-3 py-2.5 text-[0.875rem] tracking-[0.5px] text-[#19c9e8] uppercase sm:px-4 sm:py-2 sm:font-semibold`,
  );
  return (
    <div
      className={`mb-6 inline-flex items-center gap-2 rounded-full border
        border-solid border-[#19c9e84d] bg-[#c2eaf426] px-3 py-2.5
        text-[0.875rem] tracking-[0.5px] text-[#19c9e8] uppercase sm:px-4
        sm:py-2 sm:font-semibold`}
    >
      <span
        className={`inline h-2 w-2 rounded-[50%] bg-[#10b981]
          shadow-[0_0_8px_#10b981]`}
      ></span>
      {children}
    </div>
  );
}
