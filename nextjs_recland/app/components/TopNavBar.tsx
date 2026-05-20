"use client";

import { useEffect, useState } from "react";

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
            className={`fixed top-0 left-0 w-full h-[108px] transition-colors duration-300 ${
                isScroll ? "bg-topbar-color" : "bg-topbar-color/0"
            }`}
        ></div>
    );
};
