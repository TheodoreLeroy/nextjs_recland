"use client"
import { PARTNERS_IMAGE } from "@/constants/partner";
import Image from "next/image";

export default function PartnerSection() {
  return (
    <section className="flex h-16 items-center bg-gray-300 lg:h-30">
      <div className="w-full overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-5 lg:gap-26">
          {[...PARTNERS_IMAGE, ...PARTNERS_IMAGE].map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex h-6 w-36 shrink-0 items-center justify-center lg:h-10"
            >
              <Image
                src={item.href}
                alt={item.alt}
                width={144}
                height={80}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
