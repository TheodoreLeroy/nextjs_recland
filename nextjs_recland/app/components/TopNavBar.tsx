"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { IoIosMenu } from "react-icons/io";
export const TopNavBar = () => {
    const [isScroll, setIsScroll] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setIsMenuOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const openMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav id="navbar" className="w-screen h-30 flex justify-between">
                {/* logo */}
                <div className="flex items-center justify-center px-10">
                    <Link href="#">
                        <img
                            src="images\graphics\logo-white752b.png"
                            alt="Recland white logo"
                            className="
                        w-40 self-center"
                        />
                    </Link>
                </div>
                {/* menu mobile */}
                <div className="flex justify-center items-center px-10">
                    <button type="button" onClick={openMenu}>
                        <IoIosMenu fill="white" size={32} />
                    </button>
                    <div
                        ref={menuRef}
                        className={`
                                absolute
                                flex
                                flex-col
                                w-screen
                                h-fit
                                left-0
                                top-0
                                transition-all                     
                                duration-300   
                                bg-white                    
                                ${
                                    isMenuOpen
                                        ? "translate-x-0"
                                        : "translate-x-full"
                                }`}
                    >
                        <div className="w-screen h-30 border-b border-gray-200 flex items-center">
                            <img
                                src="images\graphics\logo.png"
                                alt="Recland logo"
                                className="h-16 px-6"
                            />
                        </div>
                        <ul
                            id="mobile_nav"
                            className="flex flex-col text-3xl px-6 leading-10 py-10 font-medium text-gray-400"
                        >
                            <li className="">
                                <Link href="/jobs">Tìm việc</Link>
                            </li>
                            <li>
                                <Link href="/company">Công ty</Link>
                            </li>
                            <li>
                                <Link href="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link href="/about">Giới thiệu</Link>
                            </li>
                            <li>
                                <Link href="/contact">Liên hệ</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
