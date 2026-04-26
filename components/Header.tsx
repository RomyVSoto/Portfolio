"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-16 py-5 font-heading">
      <div className="font-mono font-bold text-2xl text-accent tracking-tight">
        <Link href="#" className="cursor-pointer">
          RV<span className="text-white">.</span>
        </Link>
      </div>
      <div className="flex gap-10 font-body font-medium text-sm text-text-secondary">
        <Link
          href="#"
          className="hover:text-accent transition-colors duration-300 cursor-pointer relative group"
        >
          Work
          <span className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
        </Link>
        <Link
          href="#"
          className="hover:text-accent transition-colors duration-300 cursor-pointer relative group"
        >
          About
          <span className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
        </Link>
        <Link
          href="#"
          className="hover:text-accent transition-colors duration-300 cursor-pointer relative group"
        >
          Experience
          <span className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
        </Link>
        <Link
          href="#"
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
