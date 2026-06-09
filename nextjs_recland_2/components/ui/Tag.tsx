import React from "react";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}
export default function Tag({ children, className }: TagProps) {
  return (
    <span
      className={`rounded-md bg-[#f1f5f9] px-1.5 py-0.5 text-[0.65rem]
        font-semibold text-[#475569] sm:px-2 sm:py-1 sm:text-[0.9rem]`}
    >
      {children}
    </span>
  );
}
