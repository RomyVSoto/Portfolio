import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-white px-5 py-4">
      <Link href="#hero">
        <div className="font-heading font-bold text-lg tracking-tight hover:scale-110 hover:position-relative transition-all cursor-pointer">
          Romy Valdez
        </div>
      </Link>
      <div className="flex gap-10">
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
        <span className="cursor-pointer underline underline-offset-6 decoration-transparent hover:underline-offset-1 hover:decoration-red-500 transition-all">
          About
        </span>
      </div>
      <div>
        <Button className="font-heading py-5 px-5 text-md tracking-tight cursor-pointer hover:bg-[#991B1B] transition-all hover:scale-105">
          Resume
        </Button>
      </div>
    </header>
  );
}
