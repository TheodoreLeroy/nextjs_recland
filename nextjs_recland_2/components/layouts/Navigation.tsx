"use client";
import Link from "next/link";
import Image from "next/image";
import {
  RECLAND_LOGO_WHITE,
  NAVIGATION,
  EN_FLAG,
  RECLAND_LOGO,
} from "@/constants/ui";
import Button from "../ui/Button";
import { useUIStore } from "@/store/ui.store";
import React from "react";
import { usePathname } from "next/navigation";
interface Props {
  className?: string;
}

export default function Navigation({ className }: Props) {
  const { isScroll } = useUIStore();
  const pathname = usePathname();
  const isHomePage = pathname === "/home";
  const isLoginPage = pathname === "/login";
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      useUIStore.setState({ isScroll: scrollTop > 0 });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`fixed top-0 left-0 z-50 flex h-20 w-full items-center justify-between px-4 transition-all duration-300 md:h-24 md:px-10 lg:h-26 lg:px-20 ${
        isHomePage
          ? isScroll
            ? "bg-topbar-color"
            : "bg-transparent"
          : "bg-white shadow-md"
      } ${className}`}
    >
      {/* Left */}
      <div className="flex items-center">
        <div className="flex shrink-0 items-center">
          <Link href="/">
            <Image
              src={`${isHomePage ? RECLAND_LOGO_WHITE : RECLAND_LOGO}`}
              alt="Recland Logo"
              width={200}
              height={200}
              className="h-8 w-20 object-contain px-10 sm:h-10 sm:w-24 md:h-12 md:w-36 lg:h-14 lg:w-48"
            />
          </Link>
        </div>

        <nav className="hidden sm:block">
          <ul className="flex items-center gap-4 text-nowrap md:gap-6 lg:gap-10">
            {NAVIGATION.map((nav) => (
              <li key={nav.id} className="group relative">
                <span
                  className={`cursor-pointer text-xs font-medium ${isHomePage ? "text-white/80" : "text-black"} hover:text-white sm:text-xs md:text-sm lg:text-sm`}
                >
                  {nav.title}
                </span>

                {/* Dropdown Menu */}
                <ul className="invisible absolute top-full left-0 w-40 rounded-md bg-white pt-2 opacity-0 shadow-lg transition-opacity duration-300 group-hover:visible group-hover:opacity-100 md:w-48">
                  {nav.items.map((item, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:rounded-bl-lg hover:border-s-4 hover:border-b hover:border-sky-400 hover:bg-gray-100 hover:shadow-xl"
                    >
                      <Link
                        href={item.href}
                        className="block w-full text-xs text-gray-700 md:text-sm"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* 3. Right: Flags & Auth Button */}
      <div className="flex items-center gap-3 md:gap-6">
        <div className="hidden shrink-0 md:block">
          <Image
            src={EN_FLAG}
            alt="English Flag"
            width={32}
            height={32}
            className="lg:h-10 lg:w-10"
          />
        </div>

        <Link href={"/login"}>
          <Button
            variant="primary"
            className={`px-3 py-1.5 text-xs font-medium whitespace-nowrap text-white hover:underline sm:px-4 sm:py-2 sm:text-sm ${isLoginPage ? "hidden" : ""}`}
          >
            Đăng nhập
          </Button>
        </Link>
      </div>
    </section>
  );
}
