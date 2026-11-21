"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Diamond } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const skillGroups = [
  {
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn", "React Query"],
  },
  {
    label: "Backend",
    skills: [
      "Node.js",
      "Express",
      "Python",
      "C#",
      "PostgreSQL",
      "SQL Server",
      "Supabase",
      "Prisma",
      "tRPC",
      "JWT",
    ],
  },
  {
    label: "Tools",
    skills: ["Git", "VS Code", "Postman"],
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        gsap.from(".about-left > *", {
          opacity: 0,
          y: 40,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".about-left",
            start: "top 85%",
            once: true,
          },
        });

        gsap.utils.toArray<HTMLElement>(".about-skill-group").forEach((group) => {
          gsap.from(group, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: group,
              start: "top 85%",
              once: true,
            },
          });
        });
      },
      sectionRef,
    );

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-14 py-10 px-6 md:px-10 lg:px-16"
    >
      <div className="about-left w-full lg:w-1/2 flex flex-col gap-6">
        <div className="flex items-center gap-3 font-sans text-xs text-text-muted tracking-widest">
          <span aria-hidden className="w-8 h-px bg-accent"></span>
          <span className="font-bold">ABOUT ME</span>
        </div>
        <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary">
          Passionate about <span className="text-accent">clean code</span> and
          great UX.
        </h2>
        <div className="flex flex-col gap-4 font-sans font-normal text-base md:text-lg text-text-secondary max-w-[65ch]">
          <p>
            I&apos;m a full-stack developer based in Santo Domingo. My focus is
            building fast, accessible, well-architected web applications —
            pairing strong technical foundations with thoughtful interface
            design.
          </p>
          <p>
            I work primarily in the React and Next.js ecosystem, lean on
            TypeScript for safety, and care a lot about details: motion that
            feels right, type that reads well, and APIs that don&apos;t surprise
            the people consuming them.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-10">
        {skillGroups.map(({ label, skills }) => (
          <div key={label} className="about-skill-group space-y-4">
            <h3 className="flex items-center gap-3 font-heading font-medium text-sm uppercase text-accent-text tracking-widest">
              <Diamond aria-hidden className="w-3 h-3" /> {label}
            </h3>
            <ul className="flex flex-wrap gap-2 text-xs">
              {skills.map((tech) => (
                <li
                  key={tech}
                  className="font-heading text-text-primary p-2 px-3 border border-border tracking-wider"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
