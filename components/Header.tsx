"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 100); // desaparece luego de 100px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`sticky top-0 flex justify-between items-center bg-white px-5 py-4 transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}
    >
      <Link href="#hero">
        <div className="font-heading font-bold text-lg tracking-tight hover:scale-110 hover:position-relative transition-all cursor-pointer">
          Romy Valdez
        </div>
      </Link>
      <div className="hidden md:flex gap-6 lg:gap-10">
        <Link href="#projects">
          <span className="cursor-pointer underline underline-offset-6 decoration-transparent hover:underline-offset-1 hover:decoration-red-500 transition-all">
            Projects
          </span>
        </Link>
        <Link href="#experience">
          <span className="cursor-pointer underline underline-offset-6 decoration-transparent hover:underline-offset-1 hover:decoration-red-500 transition-all">
            Experience
          </span>
        </Link>
        <Link href="#about">
          <span className="cursor-pointer underline underline-offset-6 decoration-transparent hover:underline-offset-1 hover:decoration-red-500 transition-all">
            About
          </span>
        </Link>
      </div>
      <div>
        <Link href="https://path.cv/romyavaldez" target="_blank">
          <Button className="font-heading py-4 px-4 sm:py-5 sm:px-5 text-sm sm:text-md tracking-tight cursor-pointer hover:bg-[#991B1B] transition-all hover:scale-105">
            Resume
          </Button>
        </Link>
      </div>
    </header>
  );
}
