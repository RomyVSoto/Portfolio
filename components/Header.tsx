"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MoveRight, Menu, X } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { href: "#projects", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    ScrollTrigger.create({
      start: "top -80",
      onEnter: () => {
        header.classList.add("backdrop-blur-sm", "bg-bg/80", "border-b", "border-border");
        header.classList.remove("bg-transparent");
        gsap.to(header, { borderBottom: "1px solid #2E2E2E", duration: 0.3, ease: "power2.out" });
      },
      onLeaveBack: () => {
        header.classList.remove("backdrop-blur-sm", "bg-bg/80", "border-b", "border-border");
        header.classList.add("bg-transparent");
        gsap.to(header, { backgroundColor: "transparent", borderBottom: "1px solid transparent", duration: 0.3, ease: "power2.out" });
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 w-full z-50 px-6 md:px-8 py-4 flex justify-between items-center font-heading"
      >
        <div className="font-mono font-bold text-2xl text-accent tracking-tight">
          <Link href="#" className="cursor-pointer">
            RV<span className="text-white">.</span>
          </Link>
        </div>

        <div className="hidden md:flex gap-10 font-sans font-medium text-sm text-text-secondary">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-accent transition-colors duration-300 cursor-pointer relative group"
            >
              {label}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            href="#contact"
            className="font-sans font-semibold flex items-center gap-2 bg-accent hover:bg-accent-hover transition-colors duration-300 px-3 py-2 rounded-xs"
          >
            Hire Me <MoveRight />
          </Link>
        </div>

        <button
          className="md:hidden text-text-primary z-60 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <div
        className={`md:hidden fixed inset-0 z-55 bg-bg/96 backdrop-blur-md flex flex-col items-center justify-center transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className="flex flex-col items-center gap-8"
          onClick={(e) => e.stopPropagation()}
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-sans font-medium text-2xl text-text-secondary hover:text-accent transition-colors duration-300"
            >
              {label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="font-sans font-semibold flex items-center gap-2 bg-accent hover:bg-accent-hover transition-colors duration-300 px-6 py-3 rounded-xs mt-4"
          >
            Hire Me <MoveRight />
          </Link>
        </div>
      </div>
    </>
  );
}
