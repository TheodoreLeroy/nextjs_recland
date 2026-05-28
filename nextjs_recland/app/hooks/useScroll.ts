"use client";

import { useEffect, useState, useRef } from "react";

export function useScroll() {
  const [isScroll, setIsScroll] = useState(false);
const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleScroll() {
      setIsScroll(window.scrollY > 50);
    }

    // check ngay khi mount
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isScroll;
}
