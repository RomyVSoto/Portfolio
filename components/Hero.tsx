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
        delay: 0.2
      })

      gsap.from(titleRef.current?.children ?? [], {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power4.out",
        stagger: 0.15,
        delay: 0.4
      })

      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.8
      })

      gsap.from(buttonsRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        delay: 1
      })

      gsap.from(stackRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        delay: 1.2
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="hero"
      className="flex items-center justify-between min-h-screen gap-16 py-16 px-16"
    >
      {/* Columna izquierda */}
      <div className="w-3/4 flex flex-col gap-8">
        <span className="flex items-center gap-2 font-sans text-xs text-text-secondary tracking-widest">
          <span
            ref={badgeRef}
            className="w-2 h-2 rounded-full bg-green pulse-dot"
          />
          AVAILABLE FOR WORK — REMOTE / DR
        </span>
        <span
          ref={titleRef}
          className="flex flex-col font-sans font-black text-9xl tracking-tight"
        >
          <p>Full-Stack</p>
          <p className="italic text-accent font-extrabold">Developer.</p>
        </span>
        <span
          ref={subtitleRef}
          className="font-sans font-normal text-lg text-text-secondary w-3/4"
        >
          Building{" "}
          <strong className="text-text-primary">
            scalable web applications
          </strong>{" "}
          with modern technologies. Based in Santo Domingo, DR — shipping
          production interfaces from concept to deploy.
        </span>
        <span ref={buttonsRef} className="flex gap-4">
          <Link
            href="#projects"
            className="flex gap-2 bg-accent text-md text-white px-8 py-4 rounded-none hover:bg-accent-hover"
          >
            View My Work <ArrowRight />
          </Link>
          <a
            href="https://path.cv/romyvsoto"
            className="flex items-center border border-accent gap-2 px-8 py-2 text-sm text-accent rounded-none hover:bg-accent hover:text-white transition-all cursor-pointer"
          >
            <Download /> Download CV
          </a>
        </span>
        <span
          ref={stackRef}
          className="flex gap-4 items-center text-text-secondary"
        >
          <p className="text-text-muted text-xs tracking-widest">STACK</p>
          <Separator
            orientation="vertical"
            className="bg-text-primary/10 w-px h-6"
          />
          <span className="flex items-center gap-3 font-sans text-sm">
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

      {/* Columna derecha */}
      <div className="w-2/4 h-120 relative border border-border flex flex-col justify-between py-4 px-6">
        {/* Esquinas */}
        <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent" />
        <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent" />
        <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent" />
        <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent" />

        {/* Header RV/2026 y LIVE */}
        <div className="flex justify-between items-center py-4">
          <span className="font-mono text-xs text-text-muted tracking-widest">
            RV / 2026
          </span>
          <span className="flex items-center gap-1.5 font-mono text-xs text-text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
            LIVE
          </span>
        </div>

        {/* Esfera */}
        <div className="flex items-center justify-center flex-1">
          <div className="absolute w-80 h-80 rounded-full border border-border opacity-50" />
          <div
            className="relative w-64 h-64 rounded-full breathe"
            style={{
              background:
                "radial-gradient(circle at 35% 35%, #E5192A, #8B0000)",
              boxShadow: "0 0 80px 30px #C1121F44",
            }}
          />
        </div>

        {/* Código snippet */}
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
