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
            <div id="bounding" className="w-screen h-2500 bg-[url]">
                <img
                    src="/bg-top.jpg"
                    alt="Recland hero background"
                    className={`${isHomePage ? "absolute object-cover -z-1 w-screen h-screen top-0 overflow-clip sm:h-fit md:-top-63" : "hidden"}`}
                />
                <header>
                    {/* Navigation */}
                    <TopNavBar />
                </header>
                <div
                    id="app"
                    className="relative top-0 max-w-7xl border-x left-1/2 -translate-x-1/2"
                >
                    {children}
                </div>
            </div>
        </>
    );
}
