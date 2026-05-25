"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { IoIosMenu } from "react-icons/io";
import Button from "./Button";
import logo from "./logo.png";
export const TopNavBar = () => {
    const [isScroll, setIsScroll] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const menuRef = useRef<HTMLDivElement>(null);
    const menuItems: { [key: string]: string } = {
        "Tìm việc": "/jobs",
        "Công ty": "/company",
        Blog: "/blog",
        "Giới thiệu": "/about",
        "Liên hệ": "/contact",
    };

    // useEffect(() => {
    //     function handleClickOutside(event: MouseEvent) {
    //         if (
    //             menuRef.current &&
    //             !menuRef.current.contains(event.target as Node)
    //         ) {
    //             setIsMenuOpen(false);
    //         }
    //     }

    //     document.addEventListener("mousedown", handleClickOutside);

    //     return () => {
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     };
    // }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 0);
        };

        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const openMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`fixed top-0 w-full flex justify-center transition-all duration-300 ${isScroll ? "bg-topbar-color": ""}`}>
            <nav
                id="navbar"
                className="w-full h-30 flex items-center justify-between tablet:w-fit"
            >
                {/* Logo */}
                <div className="flex items-center px-10">
                    <Link href="/home">
                        <Image
                            src="/images/graphics/logo-white752b.png"
                            alt="Recland logo"
                            width={120}
                            height={120}
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden tablet:flex items-center gap-10 px-10">
                    <ul className="flex items-center gap-8">
                        {Object.entries(menuItems).map(([key, value]) => (
                            <li key={key} className="text-nowrap">
                                <Link
                                    href={value}
                                    className="text-gray-300 text-2xl hover:text-gray-300 transition"
                                >
                                    {key}
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
                        <Button>Cộng tác viên</Button>

                        <Button variant="outlined">Nhà tuyển dụng</Button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="tablet:hidden flex items-center px-10">
                    <button type="button" onClick={openMenu}>
                        <IoIosMenu fill="white" size={36} />
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    ref={menuRef}
                    className={`
                    tablet:hidden
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

                        {Object.entries(menuItems).map(([key, value]) => (
                            <li key={key}>
                                <Link
                                    href={value}
                                    className="
                                    block
                                    text-3xl
                                    hover:text-gray-300
                                    px-5
                                    py-5
                                "
                                >
                                    {key}
                                </Link>
                            </li>
                        ))}

                        <div className="flex flex-col gap-5 px-5 mt-5">
                            <Button>Cộng tác viên</Button>

                            <Button variant="outlined">Nhà tuyển dụng</Button>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    );
};
