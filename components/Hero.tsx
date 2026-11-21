"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { Separator } from "@base-ui/react";
import { gsap } from "gsap";

const stack = ["Next.js", "TypeScript", "Supabase", "Prisma", "tRPC"];

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const buttonsRef = useRef<HTMLSpanElement>(null);
  const stackRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Entrance motion only for visitors who have not asked for reduced motion.
    // Every target carries `data-reveal`, which keeps it hidden until this runs.
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ defaults: { duration: 0.6, ease: "power3.out" } });
      const rise = (y: number) => [{ autoAlpha: 0, y }, { autoAlpha: 1, y: 0 }] as const;

      tl.fromTo(badgeRef.current, ...rise(20), 0.2)
        .fromTo(
          titleRef.current?.children ?? [],
          rise(60)[0],
          { ...rise(60)[1], duration: 0.8, ease: "power4.out", stagger: 0.15 },
          0.4,
        )
        .fromTo(subtitleRef.current, ...rise(20), 0.9)
        .fromTo(buttonsRef.current, ...rise(20), 1.05)
        .fromTo(stackRef.current, ...rise(20), 1.2);
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="hero"
      className="flex flex-col lg:flex-row items-center justify-between min-h-screen gap-8 lg:gap-16 pt-24 pb-12 lg:py-16 px-6 md:px-10 lg:px-16"
    >
      <div className="w-full xl:flex-1 flex flex-col gap-6 lg:gap-8 min-w-0">
        <span
          ref={badgeRef}
          data-reveal
          className="flex items-center gap-2 font-sans text-xs text-text-secondary tracking-widest"
        >
          <span aria-hidden className="w-2 h-2 rounded-full bg-green pulse-dot" />
          AVAILABLE FOR WORK — REMOTE / DR
        </span>
        <h1
          ref={titleRef}
          className="flex flex-col font-sans font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight"
        >
          <span data-reveal className="block font-heading font-semibold text-2xl sm:text-3xl md:text-4xl tracking-normal text-text-primary mb-3 md:mb-4">
            Romy Valdez
          </span>{" "}
          <span data-reveal className="block">Full-Stack</span>{" "}
          <span data-reveal className="block italic text-accent font-extrabold">Developer.</span>
        </h1>
        <p
          ref={subtitleRef}
          data-reveal
          className="font-sans font-normal text-base md:text-lg text-text-secondary w-full md:w-3/4"
        >
          Building{" "}
          <strong className="text-text-primary">
            scalable web applications
          </strong>{" "}
          with modern technologies. Based in Santo Domingo, DR — shipping
          production interfaces from concept to deploy.
        </p>
        <span ref={buttonsRef}
          data-reveal className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link
            href="#projects"
            className="flex justify-center gap-2 bg-accent text-base text-text-primary px-8 py-4 rounded-none hover:bg-accent-hover transition-colors"
          >
            View My Work <ArrowRight />
          </Link>
          <a
            href="https://path.cv/romyvsoto"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center border border-accent gap-2 px-8 py-2 text-sm text-accent-text rounded-none hover:bg-accent hover:text-text-primary transition-all"
          >
            <FileText aria-hidden /> View CV
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </span>
        <span
          ref={stackRef}
          data-reveal
          className="flex flex-wrap gap-3 sm:gap-4 items-center text-text-secondary"
        >
          <span className="text-text-muted text-xs tracking-widest">STACK</span>
          <Separator
            orientation="vertical"
            className="bg-text-primary/10 w-px h-6"
          />
          <ul className="flex flex-wrap items-center gap-2 sm:gap-3 font-sans text-sm">
            {stack.map((tech, i) => (
              <li key={tech} className="flex items-center gap-2 sm:gap-3">
                {i > 0 && (
                  <span aria-hidden className="rounded-full w-0.5 h-0.5 bg-text-secondary" />
                )}
                {tech}
              </li>
            ))}
          </ul>
        </span>
      </div>

      <div aria-hidden className="hidden xl:flex xl:w-md shrink-0 h-120 relative overflow-hidden border border-border flex-col justify-between py-4 px-6">
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
          <div className="absolute w-[min(20rem,95%)] aspect-square rounded-full border border-border opacity-50" />
          <div
            className="relative w-[min(16rem,75%)] aspect-square shrink-0 rounded-full breathe"
            style={{
              background:
                "radial-gradient(circle at 35% 35%, var(--color-accent-hover), var(--color-accent-deep))",
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
