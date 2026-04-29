"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Separator } from "@base-ui/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const buttonsRef = useRef<HTMLSpanElement>(null);
  const stackRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([badgeRef.current], {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(titleRef.current?.children ?? [], {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power4.out",
        stagger: 0.15,
        delay: 0.4,
      });

      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.8,
      });

      gsap.from(buttonsRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        delay: 1,
      });

      gsap.from(stackRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        delay: 1.2,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      className="flex flex-col lg:flex-row items-center justify-between min-h-screen gap-8 lg:gap-16 pt-24 pb-12 lg:py-16 px-6 md:px-10 lg:px-16"
    >
      <div className="w-full lg:w-3/4 flex flex-col gap-6 lg:gap-8">
        <span className="flex items-center gap-2 font-sans text-xs text-text-secondary tracking-widest">
          <span
            ref={badgeRef}
            className="w-2 h-2 rounded-full bg-green pulse-dot"
          />
          AVAILABLE FOR WORK — REMOTE / DR
        </span>
        <span
          ref={titleRef}
          className="flex flex-col font-sans font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight"
        >
          <p>Full-Stack</p>
          <p className="italic text-accent font-extrabold">Developer.</p>
        </span>
        <span
          ref={subtitleRef}
          className="font-sans font-normal text-base md:text-lg text-text-secondary w-full md:w-3/4"
        >
          Building{" "}
          <strong className="text-text-primary">
            scalable web applications
          </strong>{" "}
          with modern technologies. Based in Santo Domingo, DR — shipping
          production interfaces from concept to deploy.
        </span>
        <span ref={buttonsRef} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link
            href="#projects"
            className="flex justify-center gap-2 bg-accent text-md text-white px-8 py-4 rounded-none hover:bg-accent-hover"
          >
            View My Work <ArrowRight />
          </Link>
          <a
            href="https://path.cv/romyvsoto"
            className="flex items-center justify-center border border-accent gap-2 px-8 py-2 text-sm text-accent rounded-none hover:bg-accent hover:text-white transition-all cursor-pointer"
          >
            <Download /> Download CV
          </a>
        </span>
        <span
          ref={stackRef}
          className="flex flex-wrap gap-3 sm:gap-4 items-center text-text-secondary"
        >
          <p className="text-text-muted text-xs tracking-widest">STACK</p>
          <Separator
            orientation="vertical"
            className="bg-text-primary/10 w-px h-6"
          />
          <span className="flex flex-wrap items-center gap-2 sm:gap-3 font-sans text-sm">
            <p>Next.js</p>
            <span className="rounded-full w-0.5 h-0.5 bg-text-secondary" />
            <p>TypeScript</p>
            <span className="rounded-full w-0.5 h-0.5 bg-text-secondary" />
            <p>Supabase</p>
            <span className="rounded-full w-0.5 h-0.5 bg-text-secondary" />
            <p>Prisma</p>
            <span className="rounded-full w-0.5 h-0.5 bg-text-secondary" />
            <p>tRPC</p>
          </span>
        </span>
      </div>

      <div className="hidden lg:flex lg:w-2/4 h-120 relative border border-border flex-col justify-between py-4 px-6">
        <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent" />
        <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent" />
        <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent" />
        <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent" />

        <div className="flex justify-between items-center py-4">
          <span className="font-mono text-xs text-text-muted tracking-widest">
            RV / 2026
          </span>
          <span className="flex items-center gap-1.5 font-mono text-xs text-text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
            LIVE
          </span>
        </div>

        <div className="flex items-center justify-center flex-1">
          <div className="absolute w-80 h-80 rounded-full border border-border opacity-50" />
          <div
            className="relative w-64 h-64 rounded-full breathe"
            style={{
              background: "radial-gradient(circle at 35% 35%, #E5192A, #8B0000)",
              boxShadow: "0 0 80px 30px #C1121F44",
            }}
          />
        </div>

        <div className="font-mono text-xs space-y-1 border border-border p-3 z-10 bg-bg">
          <p className="text-text-muted">{"// portfolio.tsx"}</p>
          <p>
            <span className="text-accent">const </span>
            <span className="text-text-primary">developer</span>
            <span className="text-text-secondary"> = {"{"}</span>
          </p>
          <p className="pl-4 text-text-secondary">
            name:{" "}
            <span className="text-text-primary">&apos;Romy Valdez&apos;</span>,
          </p>
          <p className="pl-4 text-text-secondary">
            role:{" "}
            <span className="text-text-primary">&apos;Full-Stack&apos;</span>,
          </p>
          <p className="pl-4 text-text-secondary">
            status: <span className="text-accent">&apos;available&apos;</span>
          </p>
          <p className="text-text-secondary">{"}"}</p>
        </div>
      </div>
    </section>
  );
}
