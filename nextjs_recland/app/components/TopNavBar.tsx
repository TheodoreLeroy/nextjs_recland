"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "antd";

export const TopNavBar = () => {
    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`fixed flex justify-center top-0 left-0 w-full h-[108px] transition-colors duration-300 ${
                isScroll ? "bg-topbar-color" : "bg-topbar-color/0"
            }`}
        >
            <div className="w-2/3 h-full flex items-center justify-between">
                {/* Add your top navigation bar content here */}
                <div id="nav-links" className="flex items-center space-x-8">
                    <div id="nav-brand-logo" className="">
                        <img
                            src="/images/graphics/logo-white752b.png"
                            alt="Recland logo"
                            className="h-fit w-fit"
                        />
                    </div>
                    <nav>
                        <ul className="flex space-x-4">
                            <li>
                                <Link
                                    href="/jobs"
                                    className="text-white hover:text-gray-300"
                                >
                                    Tìm việc
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/company"
                                    className="text-white hover:text-gray-300"
                                >
                                    Công ty
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blog"
                                    className="text-white hover:text-gray-300"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="text-white hover:text-gray-300"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-white hover:text-gray-300"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div id="nav-actions" className="flex items-center space-x-4">
                    <div id="flag">
                        <img
                            src="/images/flag/flag-en752b.svg"
                            alt="United States flag"
                            className="h-5 w-5"
                        />
                    </div>
                    <div id="user-actions">
                        {/* Add user action buttons here */}
                        <Button type="primary" className="bg-white text-topbar-color hover:bg-gray-200">
                            Cộng tác viên
                        </Button>
                        <Button className="text-white hover:text-gray-300">
                            Nhà tuyển dụng
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
