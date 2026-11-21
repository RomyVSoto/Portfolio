"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MoveRight, Menu, X } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useMagnetic } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { href: "#projects", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const hireRef = useMagnetic<HTMLAnchorElement>();

  useEffect(() => {
    // Only this component's trigger: never kill the other sections' triggers.
    const trigger = ScrollTrigger.create({
      start: "top -80",
      end: "max",
      onToggle: (self) => setScrolled(self.isActive),
    });
    return () => trigger.kill();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 px-6 md:px-8 py-4 flex justify-between items-center font-heading border-b transition-colors duration-300 ${
          scrolled
            ? "backdrop-blur-sm bg-bg/80 border-border"
            : "bg-transparent border-transparent"
        }`}
      >
        <Link
          href="#"
          aria-label="Romy Valdez, back to top"
          className="font-mono font-bold text-2xl text-accent tracking-tight"
        >
          RV<span className="text-text-primary">.</span>
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex gap-10 font-sans font-medium text-sm text-text-secondary">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:text-accent-text transition-colors duration-300 relative group"
                >
                  {label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Link
            ref={hireRef}
            href="#contact"
            className="font-sans font-semibold flex items-center gap-2 bg-accent hover:bg-accent-hover transition-colors duration-300 px-3 py-2 rounded-xs"
          >
            Hire Me <MoveRight />
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden text-text-primary z-60 p-2 -m-1"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <div
        id="mobile-menu"
        inert={!menuOpen}
        className={`md:hidden fixed inset-0 z-55 bg-bg/96 backdrop-blur-md flex flex-col items-center justify-center transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <nav
          aria-label="Mobile"
          className="flex flex-col items-center gap-8"
          onClick={(e) => e.stopPropagation()}
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-sans font-medium text-2xl text-text-secondary hover:text-accent-text transition-colors duration-300"
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
        </nav>
      </div>
    </>
  );
}
