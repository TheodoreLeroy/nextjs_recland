"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { IoIosMenu } from "react-icons/io";
import Button from "./Button";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "../constants/navigation";
import { useUIStore } from "../store/ui.store";
interface NavBarProps {
    // Add any props if needed in the future
    variant?: "primary" | "secondary";
    className?: string;
}

export const TopNavBar = ({ variant = "primary", className }: NavBarProps) => {
    // const [isScroll, setIsScroll] = useState(false);
    // const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const { isScroll, isMenuOpen, toggleMenu } = useUIStore();

    const menuRef = useRef<HTMLDivElement>(null);

    const pathname = usePathname();
    const isHomePage = pathname === "/home";
    const isActive = (href: string) => pathname === href;
    // useEffect(() => {
    //     const handleScroll = () => {
    //         setIsScroll(window.scrollY > 0);
    //     };

    //     const handleClickOutside = (event: MouseEvent) => {
    //         if (
    //             menuRef.current &&
    //             !menuRef.current.contains(event.target as Node)
    //         ) {
    //             setIsMenuOpen(false);
    //         }
    //     };
    //     document.addEventListener("mousedown", handleClickOutside);
    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //         document.removeEventListener("mousedown", handleClickOutside);
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                toggleMenu();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div
            className={`fixed top-0 w-full flex justify-center transition-all duration-300 ${isHomePage ? "" : "shadow-md"} ${isHomePage && isScroll ? "bg-topbar-color" : ""} ${className}`}
        >
            <nav
                id="navbar"
                className="w-full max-h-30 flex items-center justify-between"
            >
                {/* Logo */}
                <div className="flex items-center px-10">
                    <Link href="/home">
                        <Image
                            src={`${isHomePage ? "/images/graphics/logo-white752b.png" : "/images/graphics/logo.png"}`}
                            alt="Recland logo"
                            width={120}
                            height={120}
                            className="min-w-20"
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden laptop:flex items-center gap-10 px-10">
                    <ul className="flex items-center gap-8">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.href} className="text-nowrap">
                                <Link
                                    href={item.href}
                                    className={`${isHomePage ? "text-gray-300 hover:text-white" : "text-gray-400 hover:text-gray-300"}
                                    ${isActive(item.href) ? "text-teal-600" : ""}
                                     transition`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-4">
                        <Link href="/home">
                            <Image
                                src="/images/flag/flag-en752b.svg"
                                alt="America flag image"
                                width={60}
                                height={20}
                            ></Image>
                        </Link>
                        <Button variant="outlined">Đăng nhập</Button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="laptop:hidden flex items-center px-10">
                    <button type="button" onClick={toggleMenu}>
                        <IoIosMenu
                            fill={`${isHomePage ? "white" : "#115061"}`}
                            size={36}
                        />
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    ref={menuRef}
                    className={`
                    laptop:hidden
                    fixed top-0 right-0
                    w-screen h-fit
                    bg-white
                    py-10
                    z-50
                    transition-transform duration-500 ease-in-out
                    ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
                `}
                >
                    <ul>
                        <li className="px-5 pb-10 border-b border-gray-300 mb-2">
                            <Link href="/home">
                                <Image
                                    src="/images/graphics/logo.png"
                                    alt="Recland logo"
                                    width={145}
                                    height={145}
                                    priority
                                />
                            </Link>
                        </li>

                        {NAV_ITEMS.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <li key={item.href} className="text-nowrap">
                                    <Link
                                        href={item.href}
                                        className={`
                                    block
                                    text-lg
                                    tablet:text-xl
                                    hover:text-gray-300
                                    ${isActive ? "text-topbar-color shadow-md/10 rounded-2xl" : "text-gray-500"}
                                    px-5
                                    py-4
                                `}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}

                        <div className="flex flex-col gap-5 px-5 mt-5 items-center ">
                            <Button
                                variant="outlined"
                                className="tablet:text-xl"
                            >
                                Đăng nhập
                            </Button>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    );
};
