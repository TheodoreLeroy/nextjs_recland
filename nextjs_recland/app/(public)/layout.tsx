"use client";
import { usePathname } from "next/navigation";
import { Footer } from "../components/Footer";
import { TopNavBar } from "../components/TopNavBar";
import backGround from "@/public/bg-top.jpg";
export default function Layout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  const isHomePage = pathName === "/home";
  return (
    <>
      {/* <img
          src="/bg-top.jpg"
          alt="Recland hero background"
          className={`${isHomePage ? "absolute top-0 -z-1 h-screen w-screen overflow-clip bg-(image:--bg-hero) object-cover sm:h-fit md:-top-63" : "hidden"}`}
        /> */}

      <div
        id="app"
        className="relative top-0 w-screen h-2500 max-w-7xl border-x"
      >
        {/* Navigation */}
        <header className="w-fit">
          <TopNavBar />
        </header>
        {children}
      </div>
    </>
  );
}
