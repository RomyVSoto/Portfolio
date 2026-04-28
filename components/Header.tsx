"use client";

import { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    ScrollTrigger.create({
      start: "top -80",
      onEnter: () => {
        header.classList.add(
          "backdrop-blur-sm",
          "bg-bg/80",
          "border-b",
          "border-border",
        );
        header.classList.remove("bg-transparent");
        gsap.to(header, {
          borderBottom: "1px solid #2E2E2E",
          duration: 0.3,
          ease: "power2.out",
        });
      },
      onLeaveBack: () => {
        header.classList.remove(
          "backdrop-blur-sm",
          "bg-bg/80",
          "border-b",
          "border-border",
        );
        header.classList.add("bg-transparent");
        gsap.to(header, {
          backgroundColor: "transparent",
          borderBottom: "1px solid transparent",
          duration: 0.3,
          ease: "power2.out",
        });
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 w-full z-50 px-8 py-4 flex justify-between items-center font-heading"
    >
      <div className="font-mono font-bold text-2xl text-accent tracking-tight">
        <Link href="#" className="cursor-pointer">
          RV<span className="text-white">.</span>
        </Link>
      </div>
      <div className="flex gap-10 font-sans font-medium text-sm text-text-secondary">
        <Link
          href="#projects"
          className="hover:text-accent transition-colors duration-300 cursor-pointer relative group"
        >
          Work
          <span className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
        </Link>
        <Link
          href="#about"
          className="hover:text-accent transition-colors duration-300 cursor-pointer relative group"
        >
          About
          <span className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
        </Link>
        <Link
          href="#experience"
          className="hover:text-accent transition-colors duration-300 cursor-pointer relative group"
        >
          Experience
          <span className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
        </Link>
        <Link
          href="#contact"
          className="hover:text-accent transition-colors duration-300 cursor-pointer relative group"
        >
          Contact
          <span className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
        </Link>
      </div>
      <div>
        <Button className="bg-accent hover:bg-accent-hover transition-colors duration-300 px-5 py-5 rounded-xs">
          Hire Me <MoveRight />
        </Button>
      </div>
    </header>
  );
}
