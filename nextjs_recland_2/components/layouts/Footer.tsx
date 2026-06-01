"use client";

import Container from "../common/Container";
import { RECLAND_LOGO, SOCIAL_ICONS, FOOTER } from "@/constants/ui";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="relative min-h-fit bg-footer-color">
      <Container>
        <div className="flex flex-col justify-center gap-10 py-10 text-footer-text md:grid md:grid-cols-2 md:gap-4 md:text-xl lg:grid-cols-3 lg:items-center lg:gap-20">
          {/* Logo */}
          <div className="flex flex-col gap-4">
            <Image
              src={RECLAND_LOGO}
              alt=""
              width={200}
              height={200}
              className="lg:w-68"
            />
            <h4>Mang việc làm và ưu đãi hấp dẫn đến cho Recer và Ứng viên</h4>
            <div className="flex items-center">
              {SOCIAL_ICONS.map((item) => {
                return (
                  <Link href={"#"} key={item.id}>
                    <Image src={item.src} alt={""} width={60} height={60} />
                  </Link>
                );
              })}
            </div>
          </div>

          {FOOTER.map((item) => {
            return (
              <div key={item.id}>
                <h5 className="mb-2 text-xl font-bold text-main">
                  {item.title}
                </h5>
                <ul className="mb-5 flex flex-col gap-2">
                  {item.anchor.map((link, subIndex) => {
                    return (
                      <li key={subIndex}>
                        <Link href={link.href} className="hover:underline">
                          {link.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </footer>
  );
}
