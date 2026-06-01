"use client";
import Link from "next/link";
import Image from "next/image";
import Container from "../common/Container";
import {
  RECLAND_LOGO_WHITE,
  NAVIGATION,
  EN_FLAG,
  VI_FLAG,
} from "@/constants/ui";
import Button from "../ui/Button";
import { useUIStore } from "@/store/ui.store";
import React from "react";

export default function Navigation() {
  const { isScroll } = useUIStore();
  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    useUIStore.setState({ isScroll: scrollTop > 0 });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`fixed top-0 left-0 z-50 flex h-26 w-full items-center px-20 transition-all duration-300 ${isScroll ? "bg-topbar-color" : "bg-transparent"}`}
    >
      {/* Left */}
      <div className="hidden h-full w-full items-center justify-between lg:flex" />
      {/* Logo */}
      <Link href="/">
        <Image
          src={RECLAND_LOGO_WHITE}
          alt="Recland Logo"
          width={200}
          height={200}
          className="h-10 w-24 lg:h-14 lg:w-50"
        />
      </Link>
      {/* Navigation desktop*/}
      <nav>
        <ul className="flex min-w-max gap-10 text-nowrap">
          {NAVIGATION.map((nav) => (
            <li key={nav.id} className="group relative">
              <span className="text-md cursor-pointer font-medium text-white/80 hover:text-white lg:text-lg">
                {nav.title}
              </span>
              <ul className="invisible absolute top-full left-0 w-48 rounded-md bg-white pt-2 opacity-0 shadow-lg transition-opacity duration-300 group-hover:visible group-hover:opacity-100">
                {nav.items.map((item, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:rounded-bl-lg hover:border-s-4 hover:border-b hover:border-sky-400 hover:bg-gray-100 hover:shadow-xl"
                  >
                    <Link href={item.href} className="text-sm text-gray-700">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right */}
      <div className="flex items-center gap-6">
        <Image src={EN_FLAG} alt="English Flag" width={40} height={40} />
        <Button
          variant="primary"
          className="text-sm font-medium text-white hover:underline"
        >
          Đăng nhập
        </Button>
      </div>
    </section>
  );
}
