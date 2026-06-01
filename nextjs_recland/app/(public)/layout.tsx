"use client";
import { usePathname } from "next/navigation";
import { Footer } from "../components/Footer";
import { TopNavBar } from "../components/TopNavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  const isHomePage = pathName === "/home";
  return (
    <>
      <div
        id="app"
        className="w-screen h-fit border-x"
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
